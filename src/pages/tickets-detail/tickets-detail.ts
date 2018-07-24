import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TicketsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tickets-detail',
  templateUrl: 'tickets-detail.html',
})
export class TicketsDetailPage {

  ticket:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ticket = navParams.get('ticket');
    console.log(this.ticket);
  }

  ionViewDidLoad() {
    this.ticket = this.navParams.get('ticket');
  }

}
