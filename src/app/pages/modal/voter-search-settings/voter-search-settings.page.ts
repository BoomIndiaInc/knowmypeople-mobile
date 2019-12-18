import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-voter-search-settings',
  templateUrl: './voter-search-settings.page.html',
  styleUrls: ['./voter-search-settings.page.scss']
})
export class VoterSearchSettingsPage implements OnInit {
  availablePreferences = ['serialNumber', 'voterId', 'voterName', 'husbandOrFatherName'];
  public preferenceForm: FormGroup;
  constructor(
    private modalCtrl: ModalController,
    public formBuilder: FormBuilder,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService
  ) {
    const searchPreference =
      JSON.parse(this.localStorage.retrieve('voter-search-preferences')) ||
      JSON.parse(this.sessionStorage.retrieve('voter-search-preferences'));
    this.preferenceForm = formBuilder.group({
      serialNumber: [!searchPreference ? true : searchPreference.serialNumber ? true : false],
      voterId: [!searchPreference ? true : searchPreference.voterId ? true : false],
      voterName: [!searchPreference ? true : searchPreference.voterName ? true : false],
      husbandOrFatherName: [!searchPreference ? true : searchPreference.husbandOrFatherName ? true : false]
    });
  }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss(this.preferenceForm.getRawValue());
  }

  onApply() {
    const searchPreference = this.preferenceForm.getRawValue();
    // tslint:disable-next-line:no-unused-expression
    this.localStorage.store('voter-search-preferences', JSON.stringify(searchPreference)) ||
      this.sessionStorage.store('voter-search-preferences', JSON.stringify(searchPreference));
    this.closeModal();
  }
}
