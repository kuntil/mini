import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {TicketsFormPage} from "../tickets-form/tickets-form";
import {TicketsDetailPage} from "../tickets-detail/tickets-detail";
/**
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
})
export class TicketsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
  }

  toDetailticket(){
    this.navCtrl.push(TicketsDetailPage);
  }

  toCreateTicket(){
    this.navCtrl.push(TicketsFormPage);
  }

}
