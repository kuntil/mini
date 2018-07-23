import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApplyFormPage } from '../apply-form/apply-form';
import { ApplyDetailPage } from '../apply-detail/apply-detail';

/**
 * Generated class for the ApplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apply',
  templateUrl: 'apply.html',
})
export class ApplyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyPage');
  }

  toCreateApply(){
    this.navCtrl.push(ApplyFormPage);
  }

  toDetailApply(){
    this.navCtrl.push(ApplyDetailPage);
  }


}
