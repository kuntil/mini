import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public person: {name: string, company: string, birthdate?: number};
  dob: any;
  age: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = {name: undefined, company: undefined, birthdate: undefined};
    this.dob = undefined;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
