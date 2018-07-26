import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import {TicketsFormPage} from "../tickets-form/tickets-form";
import {TicketsDetailPage} from "../tickets-detail/tickets-detail";
import {TicketProvider} from "../../providers/ticket/ticket";
/**
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
})
export class TicketsPage {

  ticket:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public ticketProf: TicketProvider) {
    this.ticket = this.ticketProf.getAllticket().subscribe(Response =>{
      this.ticket = Response.ticket;
    });
  }

  ionViewCanEnter(){
    this.ticket = this.ticketProf.ticket;
    // console.log(this.apply);
  }

  toDetailticket(tick){
    this.navCtrl.push(TicketsDetailPage,{ticket:tick});
  }

  toCreateTicket(){
    this.navCtrl.push(TicketsFormPage);
  }

}
