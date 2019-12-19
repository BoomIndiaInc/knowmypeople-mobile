import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoterService } from 'src/app/services/kmp/voter.service';
import { Voter, VoterElection } from 'src/model/voter.model';
import { ComponentUtil } from 'src/app/shared';
import { Page } from 'src/app/interfaces/pages';
import { KmpUserService } from 'src/app/services/kmp/user.service';
import { NavController } from '@ionic/angular';
import { SyncDataService } from 'src/app/services/kmp/sync-data.service';

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
  constructor(
    private route: ActivatedRoute,
    private voterService: VoterService,
    private componentUtil: ComponentUtil,
    private kmpUserService: KmpUserService,
    private navCtrl: NavController,
    private syncDataService: SyncDataService
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
      this.voter.voterElectionDTOList.forEach((voterElection: VoterElection) => {
        if (voterElection.electionType === this.kmpUserService.getElectionType()) {
          this.voterElection = voterElection;
        }
      });
    });
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
}
