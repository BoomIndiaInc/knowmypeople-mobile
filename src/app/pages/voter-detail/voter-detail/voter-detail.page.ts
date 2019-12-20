import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoterService } from 'src/app/services/kmp/voter.service';
import { Voter, VoterElection } from 'src/model/voter.model';
import { ComponentUtil } from 'src/app/shared';
import { Page } from 'src/app/interfaces/pages';
import { KmpUserService } from 'src/app/services/kmp/user.service';
import { NavController } from '@ionic/angular';
import { SyncDataService } from 'src/app/services/kmp/sync-data.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CoreUtil } from 'src/app/shared/util/core-util';


@Component({
  selector: 'app-voter-detail',
  templateUrl: './voter-detail.page.html',
  styleUrls: ['./voter-detail.page.scss']
})
export class VoterDetailPage implements OnInit {
  pageMenu: Page;
  voter: Voter;
  voterElection: VoterElection;
  voterLocation;
  isElectionDay: boolean;
  voterForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private voterService: VoterService,
    private componentUtil: ComponentUtil,
    private coreUtil: CoreUtil,
    private kmpUserService: KmpUserService,
    private navCtrl: NavController,
    private syncDataService: SyncDataService,
    public formBuilder: FormBuilder
  ) {
    const menuId = 'voter-details';
    console.log(menuId);
    if (!!menuId) {
      this.pageMenu = this.componentUtil.getMenuById(menuId);
    }
  }

  ngOnInit() {
    const index = this.route.snapshot.paramMap.get('voterPk');
    console.log(index);
    this.voterService.fetchVoter(+index).then((voter: Voter) => {
      console.log(voter);
      this.voter = voter;

      if (this.isElectionDay) {
        this.voter.voterElectionDTOList.forEach((voterElection: VoterElection) => {
          if (voterElection.electionType === this.kmpUserService.getElectionType()) {
            this.voterElection = voterElection;
          }
        });
      }

      this.voterForm = this.formBuilder.group({
        voterPk: [this.voter.voterPk],
        voterDetailPk: [this.voter.voterDetailPk],

        voterId: [this.voter.voterId],
        voterName: [this.voter.voterName],
        serialNumber: [this.voter.serialNumber],
        husbandOrFatherName: [this.voter.husbandOrFatherName],

        gender: [this.voter.gender],
        age: [this.voter.age],
        maritalStatus: [this.voter.maritalStatus],
        occupation: [this.voter.occupation],

        caste: [this.voter.caste],
        community: [this.voter.community],
        religion: [this.voter.religion],


        boothId: [this.voter.boothId],
        wardNumber: [this.voter.wardNumber],
        mlaConstituency: [this.voter.mlaConstituency],
        mpConstituency: [this.voter.mpConstituency],


        speciallyAbled: [this.voter.speciallyAbled],
        imageUrl: [this.voter.imageUrl],

        doorNumber: [this.voter.doorNumber],
        address: [this.voter.address],
        locationCoordinates: [this.voter.locationCoordinates],
        village: [this.voter.village],
        district: [this.voter.district]

      });
    });
    this.isElectionDay = this.coreUtil.isTodayElectionDay();
  }

  onLocation() {}

  onVoteOrUnVote(isVoted: boolean) {
    this.voter.voterElectionDTOList.forEach((voterElection: VoterElection) => {
      if (voterElection.electionType === this.kmpUserService.getElectionType()) {
        if (!isVoted) {
          this.componentUtil.showConfirmationAlert('UN_VOTE_WARNING', () => {
            voterElection.voted = isVoted;
            this.updateVoterforSyncData();
          });
        } else {
          voterElection.voted = isVoted;
          this.updateVoterforSyncData();
        }
      }
    });
  }

  updateVoterforSyncData(voter: Voter = this.voter) {
    console.log(voter);
    this.voterService.saveVoter(voter).then(savedVoter => {
      console.log('Voter Saved Locally!');
      this.navCtrl.navigateBack(['/voters']);
    });
  }

  onSave(voter: Voter = this.voter) {
    console.log(this.voter);
    console.log(this.voterForm.getRawValue());
    const finalVoter = {...this.voter, ...this.voterForm.getRawValue()};
    this.voterService.saveVoter(finalVoter).then(savedVoter => {
      console.log('Voter Saved Locally!');
      this.navCtrl.navigateBack(['/voters']);
    });
  }
}
