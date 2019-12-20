import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { ApiService } from '../api/api.service';
import { RETRIVE_VOTERS_REST_API_URL, UPLOAD_VOTERS_REST_API_URL } from './../../shared/util/service-util';
import { VoterSearchCriteria, VoterElection, Voter } from './../../../model/voter.model';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { KmpUserService } from './user.service';
import { CoreUtil } from 'src/app/shared/util/core-util';
import { ComponentUtil } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  isElectionDay: boolean;
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private kmpUserService: KmpUserService,
    private coreUtil: CoreUtil,
  ) {
    this.isElectionDay = this.coreUtil.isTodayElectionDay();

  }

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
    if (voters && voters.length > 0) {
      voters.filter((voter: Voter) => {
        if(this.isElectionDay) {
          voter.voterElectionDTOList = voter.voterElectionDTOList.filter((voterElection: VoterElection) => {
            return (voterElection.electionType === this.kmpUserService.getElectionType());
          });
        }
        localVoters.push(voter);
      });
    }
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
    const localVoters = [{"voterPk":34,"voterDetailPk":36,"voterId":"V1","voterName":"Ragu Ramji D","serialNumber":null,"husbandOrFatherName":"H1","gender":"Male","age":29,"doorNumber":"10","address":"Modacuruchi","religion":"Hindu","locationCoordinates":"11.234433,77.7784062","imageUrl":null,"caste":"Caste1","community":"Community1","occupation":"Farmer","maritalStatus":true,"speciallyAbled":false,"village":"Modacuruchi","district":"Erode","mlaConstituency":"Modacuruchi","mpConstituency":"Erode","voterElectionDTOList":[{"voterElectionPk":56,"electionType":"panchayat Election","electionId":"panchayat","boothId":"Booth1","wardNumber":"ward1","memberOfParty":"PMK","votingChance":"PMK","votedDateTime":null,"voted":true},{"voterElectionPk":57,"electionType":"corporaton Election","electionId":"corporaton","boothId":"Booth1","wardNumber":"ward1","memberOfParty":"ADMK","votingChance":"ADMK","votedDateTime":null,"voted":false}]},{"voterPk":35,"voterDetailPk":37,"voterId":"V2","voterName":"Gowdham","serialNumber":null,"husbandOrFatherName":"G1","gender":"Male","age":32,"doorNumber":"11","address":"Modacuruchi","religion":"Hindu","locationCoordinates":"11.23346019,77.78039971","imageUrl":null,"caste":"Caste2","community":"Community1","occupation":"Farmer","maritalStatus":true,"speciallyAbled":false,"village":"Modacuruchi","district":"Erode","mlaConstituency":"Modacuruchi","mpConstituency":"Erode","voterElectionDTOList":[{"voterElectionPk":58,"electionType":"panchayat Election","electionId":"panchayat","boothId":"Booth1","wardNumber":"ward1","memberOfParty":"ADMK","votingChance":"ADMK","votedDateTime":null,"voted":false},{"voterElectionPk":59,"electionType":"corporaton Election","electionId":"corporaton","boothId":"Booth1","wardNumber":"ward1","memberOfParty":"ADMK","votingChance":"ADMK","votedDateTime":null,"voted":false}]},{"voterPk":36,"voterDetailPk":38,"voterId":"V3","voterName":"Syed","serialNumber":null,"husbandOrFatherName":"S1","gender":"Male","age":33,"doorNumber":"12","address":"Modacuruchi","religion":"Muslim","locationCoordinates":"11.23295508,77.78220216","imageUrl":null,"caste":"Caste2","community":"Community2","occupation":"Store keeper","maritalStatus":true,"speciallyAbled":false,"village":"Modacuruchi","district":"Erode","mlaConstituency":"Modacuruchi","mpConstituency":"Erode","voterElectionDTOList":[{"voterElectionPk":60,"electionType":"panchayat Election","electionId":"panchayat","boothId":"Booth1","wardNumber":"ward1","memberOfParty":"ADMK","votingChance":"ADMK","votedDateTime":null,"voted":false},{"voterElectionPk":61,"electionType":"corporaton Election","electionId":"corporaton","boothId":"Booth1","wardNumber":"ward1","memberOfParty":"ADMK","votingChance":"ADMK","votedDateTime":null,"voted":false}]},{"voterPk":37,"voterDetailPk":39,"voterId":"V4","voterName":"Peter","serialNumber":null,"husbandOrFatherName":"A1","gender":"Male","age":40,"doorNumber":"12","address":"Modacuruchi","religion":"Christian","locationCoordinates":"11.23451252,77.78387586","imageUrl":null,"caste":"Caste3","community":"Community2","occupation":"Software Engineer","maritalStatus":true,"speciallyAbled":false,"village":"Modacuruchi","district":"Erode","mlaConstituency":"Modacuruchi","mpConstituency":"Erode","voterElectionDTOList":[{"voterElectionPk":62,"electionType":"panchayat Election","electionId":"panchayat","boothId":"Booth2","wardNumber":"ward2","memberOfParty":"ADMK","votingChance":"ADMK","votedDateTime":null,"voted":false}]},{"voterPk":38,"voterDetailPk":40,"voterId":"V5","voterName":"Khan","serialNumber":null,"husbandOrFatherName":"V1","gender":"Male","age":20,"doorNumber":"12","address":"Modacuruchi","religion":"Muslim","locationCoordinates":"11.23741692,77.78374711","imageUrl":null,"caste":"Caste3","community":"Community2","occupation":"Farmer","maritalStatus":false,"speciallyAbled":false,"village":"Modacuruchi","district":"Erode","mlaConstituency":"Modacuruchi","mpConstituency":"Erode","voterElectionDTOList":[{"voterElectionPk":63,"electionType":"panchayat Election","electionId":"panchayat","boothId":"Booth2","wardNumber":"ward2","memberOfParty":"ADMK","votingChance":"ADMK","votedDateTime":null,"voted":false},{"voterElectionPk":64,"electionType":"corporaton Election","electionId":"corporaton","boothId":"Booth2","wardNumber":"ward1","memberOfParty":"ADMK","votingChance":"ADMK","votedDateTime":null,"voted":false}]},{"voterPk":39,"voterDetailPk":41,"voterId":"V6","voterName":"Kamal","serialNumber":null,"husbandOrFatherName":"W1","gender":"Male","age":20,"doorNumber":"15","address":"Modacuruchi","religion":"Hindu","locationCoordinates":"11.24053176,77.78340379","imageUrl":null,"caste":"Caste2","community":"Community2","occupation":"Mechanic","maritalStatus":true,"speciallyAbled":false,"village":"Modacuruchi","district":"Erode","mlaConstituency":"Modacuruchi","mpConstituency":"Erode","voterElectionDTOList":[{"voterElectionPk":65,"electionType":"panchayat Election","electionId":"panchayat","boothId":"Booth1","wardNumber":"ward3","memberOfParty":"PMK","votingChance":"PMK","votedDateTime":null,"voted":false},{"voterElectionPk":66,"electionType":"corporaton Election","electionId":"corporaton","boothId":"Booth1","wardNumber":"ward3","memberOfParty":"PMK","votingChance":"PMK","votedDateTime":null,"voted":false}]},{"voterPk":40,"voterDetailPk":42,"voterId":"V7","voterName":"Vishnu","serialNumber":null,"husbandOrFatherName":"W1","gender":"Male","age":20,"doorNumber":"15","address":"Modacuruchi","religion":"Hindu","locationCoordinates":"11.24154197, 77.7851204","imageUrl":null,"caste":"Caste1","community":"Community1","occupation":"Teacher","maritalStatus":true,"speciallyAbled":false,"village":"Modacuruchi","district":"Erode","mlaConstituency":"Modacuruchi","mpConstituency":"Erode","voterElectionDTOList":[{"voterElectionPk":67,"electionType":"panchayat Election","electionId":"panchayat","boothId":"Booth1","wardNumber":"ward3","memberOfParty":"PMK","votingChance":"PMK","votedDateTime":null,"voted":false},{"voterElectionPk":68,"electionType":"corporaton Election","electionId":"corporaton","boothId":"Booth1","wardNumber":"ward3","memberOfParty":"PMK","votingChance":"PMK","votedDateTime":null,"voted":false}]},{"voterPk":41,"voterDetailPk":43,"voterId":"V8","voterName":"Robert","serialNumber":null,"husbandOrFatherName":"W1","gender":"Male","age":20,"doorNumber":"15","address":"Modacuruchi","religion":"Christian","locationCoordinates":"11.24154197, 77.7851204","imageUrl":null,"caste":"Caste1","community":"Community1","occupation":"Teacher","maritalStatus":false,"speciallyAbled":false,"village":"Modacuruchi","district":"Erode","mlaConstituency":"Modacuruchi","mpConstituency":"Erode","voterElectionDTOList":[{"voterElectionPk":69,"electionType":"panchayat Election","electionId":"panchayat","boothId":"Booth2","wardNumber":"ward3","memberOfParty":"PMK","votingChance":"PMK","votedDateTime":null,"voted":false}]},{"voterPk":42,"voterDetailPk":44,"voterId":"V9","voterName":"Robert","serialNumber":null,"husbandOrFatherName":"Q1","gender":"Male","age":28,"doorNumber":"15","address":"Modacuruchi","religion":"Buddhist","locationCoordinates":"11.24403015,77.78470516","imageUrl":null,"caste":"Caste1","community":"Community3","occupation":"Saint","maritalStatus":false,"speciallyAbled":false,"village":"Modacuruchi","district":"Erode","mlaConstituency":"Modacuruchi","mpConstituency":"Erode","voterElectionDTOList":[{"voterElectionPk":70,"electionType":"panchayat Election","electionId":"panchayat","boothId":"Booth2","wardNumber":"ward3","memberOfParty":"DMK","votingChance":"DMK","votedDateTime":null,"voted":false}]},{"voterPk":43,"voterDetailPk":45,"voterId":"V10","voterName":"Mohammad","serialNumber":null,"husbandOrFatherName":"W1","gender":"Male","age":20,"doorNumber":"15","address":"Modacuruchi","religion":"Muslim","locationCoordinates":"11.24474571,77.78590679","imageUrl":null,"caste":"Caste1","community":"Community2","occupation":"Social Worker","maritalStatus":false,"speciallyAbled":false,"village":"Modacuruchi","district":"Erode","mlaConstituency":"Modacuruchi","mpConstituency":"Erode","voterElectionDTOList":[{"voterElectionPk":71,"electionType":"panchayat Election","electionId":"panchayat","boothId":"Booth1","wardNumber":"ward3","memberOfParty":"DMK","votingChance":"DMK","votedDateTime":null,"voted":false}]}];
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
