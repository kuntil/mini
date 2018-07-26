import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TicketProvider } from '../../providers/ticket/ticket';

import { TicketsPage } from '../../pages/tickets/tickets';
/**
 * Generated class for the TicketsFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tickets-form',
  templateUrl: 'tickets-form.html',
})
export class TicketsFormPage {

  title:string='';
  subtitle:string='';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ticketProf: TicketProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsFormPage');
  }

  toSubmit(){
    this.ticketProf.postAddticket('0001',this.title,this.subtitle).subscribe(Response =>{
      console.log(Response);
    });
    this.navCtrl.setRoot(TicketsPage);
  }

}
