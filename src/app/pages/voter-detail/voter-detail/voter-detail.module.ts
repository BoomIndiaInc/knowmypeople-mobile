import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { VoterDetailPage } from './voter-detail.page';

const routes: Routes = [
  {
    path: '',
    component: VoterDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule,
    ReactiveFormsModule
  ],
  declarations: [VoterDetailPage],
  providers: [FormBuilder]
})
export class VoterDetailPageModule {}
