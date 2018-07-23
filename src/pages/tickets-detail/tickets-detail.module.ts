import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketsDetailPage } from './tickets-detail';

@NgModule({
  declarations: [
    TicketsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketsDetailPage),
  ],
})
export class TicketsDetailPageModule {}
