import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoterSearchSettingsPage } from './voter-search-settings.page';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: VoterSearchSettingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule,
    ReactiveFormsModule,
    ReactiveFormsModule
  ],
  declarations: [VoterSearchSettingsPage],
  providers: [FormBuilder]
})
export class VoterSearchSettingsPageModule {}
