import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ApplyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-apply-detail',
  templateUrl: 'apply-detail.html',
})
export class ApplyDetailPage {

  apply:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.apply = navParams.get('apply');
    console.log(this.apply);
  }

  ionViewDidLoad() {
    this.apply = this.navParams.get('apply');
  }

}
