import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { ApiService } from '../api/api.service';
import { RETRIVE_VOTERS_REST_API_URL, UPLOAD_VOTERS_REST_API_URL } from './../../shared/util/service-util';
import { VoterSearchCriteria, VoterElection, Voter } from './../../../model/voter.model';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { KmpUserService } from './user.service';
import { CoreUtil } from 'src/app/shared/util/core-util';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private kmpUserService: KmpUserService,
    private coreUtil: CoreUtil
  ) {}

  fetch(criteria: VoterSearchCriteria): Observable<HttpResponse<Voter>> {
    return this.http.get<Voter>(ApiService.API_URL + RETRIVE_VOTERS_REST_API_URL + '?' + this.coreUtil.generateQueryParams(criteria), {
      observe: 'response'
    });
  }

  save(voters: Voter[]): Observable<HttpResponse<any>> {
    return this.http.put(ApiService.API_URL + UPLOAD_VOTERS_REST_API_URL, voters, { observe: 'response' });
  }

  getVotersDataKey(): string {
    const boothId = this.kmpUserService.getBoothId();
    const wardId = this.kmpUserService.getWardId();
    const electionType = this.kmpUserService.getElectionType();
    return `${boothId}-${wardId}-${electionType}`;
  }

  getVotersFromLocal(): Promise<any> {
    const localVoters = [];
    const voters: Voter[] = JSON.parse(this.localStorage.retrieve(`voters-${this.getVotersDataKey()}`)) as Voter[];
    voters.filter((voter: Voter) => {
      voter.voterElectionDTOList = voter.voterElectionDTOList.filter((voterElection: VoterElection) => {
        return (voterElection.electionType === this.kmpUserService.getElectionType());
      });
      localVoters.push(voter);
    });
    return Promise.resolve(localVoters && localVoters.length > 0 ? localVoters : []);
  }

  saveVotersToLocal(voters: Voter[]): Promise<any> {
    const votersString = JSON.stringify(voters);
    this.localStorage.store(`voters-${this.getVotersDataKey()}`, votersString);
    return Promise.resolve(voters && voters.length > 0 ? voters : []);
  }

  uploadVoters(voters: Voter[]): Promise<any> {
    return this.save(voters)
      .toPromise()
      .then(response => {
        const resVoters = response.body;
        if (resVoters) {
          return resVoters;
        } else {
          return [];
        }
      })
      .catch(err => {
        console.log(err);
        return [];
      });
  }

  fetchVoters(boothId, wardId, electionType): Promise<any> {
    // test
    this.saveTestData();
    const criteria = new VoterSearchCriteria(boothId, electionType, wardId);
    return this.fetch(criteria)
      .toPromise()
      .then(response => {
        const voters = response.body;
        if (voters) {
          const votersString = JSON.stringify(voters);
          this.localStorage.store(`voters-${this.getVotersDataKey()}`, votersString);
          return voters;
        } else {
          console.log('Failed to Fetch Voters for local use');
          return [];
        }
      })
      .catch(err => {
        console.log(err);
        console.log('Failed to Fetch Voters for local use');
        return [];
      });
  }

  saveTestData() {
    const localVoters = [
      {
        voterPk: 1,
        voterDetailPk: 1,
        voterId: '21200',
        voterName: 'EshaYogi',
        wardNumber: null,
        serialNumber: null,
        husbandOrFatherName: 'Samy',
        gender: 'Female',
        age: 90,
        doorNumber: 'X70/98',
        address: 'Kangeyam',
        religion: 'Hindu',
        boothId: 'booth001',
        voterElectionDTOList: [
          {
            voterElectionPk: 1,
            electionType: 'Panchayat_Councillor',
            votedDateTime: null,
            voted: false
          },
          {
            voterElectionPk: 2,
            electionType: 'Panchayat_President',
            votedDateTime: null,
            voted: false
          }
        ]
      },
      {
        voterPk: 2,
        voterDetailPk: 2,
        voterId: '31200',
        voterName: 'Gopal',
        wardNumber: null,
        serialNumber: null,
        husbandOrFatherName: 'Samy',
        gender: 'Male',
        age: 90,
        doorNumber: 'X70/98',
        address: 'Kangeyam',
        religion: 'Hindu',
        boothId: 'booth001',
        voterElectionDTOList: [
          {
            voterElectionPk: 3,
            electionType: 'Panchayat_Councillor',
            votedDateTime: null,
            voted: false
          }
        ]
      }
    ];
    const localvotersString = JSON.stringify(localVoters);
    this.localStorage.store(`voters-${this.getVotersDataKey()}`, localvotersString);
  }

  fetchVoter(voterPK: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getVotersFromLocal().then((voters: Voter[]) => {
        const voterArray = voters.filter((voter: Voter) => {
          return voter.voterPk ? voter.voterPk === voterPK : false;
        });
        if (voterArray && voterArray.length > 0) {
          const voter = voterArray[0] as Voter;
          resolve(voter);
        } else {
          resolve(null);
        }
      });
    });
  }

  saveVoter(voter: Voter): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getVotersFromLocal().then((localVoters: Voter[]) => {
        const tempVoters = [];
        const voters = localVoters.filter((voterItem: Voter, index) => {
          if (voterItem.voterPk === voter.voterPk && voterItem.voterDetailPk === voter.voterDetailPk) {
            voterItem = voter;
          }
          tempVoters.push(voterItem);
          return true;
        });
        if (tempVoters && tempVoters.length > 0) {
          this.saveVotersToLocal(tempVoters).then((savedVoters: Voter[]) => {
            resolve(voter);
          });
        } else {
          resolve(null);
        }
      });
    });
  }
}
