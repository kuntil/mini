import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketsFormPage } from './tickets-form';

@NgModule({
  declarations: [
    TicketsFormPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketsFormPage),
  ],
})
export class TicketsFormPageModule {}
