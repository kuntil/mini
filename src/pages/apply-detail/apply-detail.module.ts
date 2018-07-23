import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplyDetailPage } from './apply-detail';

@NgModule({
  declarations: [
    ApplyDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplyDetailPage),
  ],
})
export class ApplyDetailPageModule {}
