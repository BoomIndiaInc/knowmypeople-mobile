import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PopmenuComponent } from './../../components/popmenu/popmenu.component';

import { VotersPage } from './voters.page';

const routes: Routes = [
  {
    path: '',
    component: VotersPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule, ReactiveFormsModule
  ],
  declarations: [VotersPage, PopmenuComponent],
  providers: [FormBuilder]
})

export class VotersPageModule {}
