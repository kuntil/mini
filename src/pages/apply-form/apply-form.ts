import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApplyPage } from '../apply/apply';

import { ApplyProvider } from '../../providers/apply/apply';

/**
 * Generated class for the ApplyFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-apply-form',
  templateUrl: 'apply-form.html',
})
export class ApplyFormPage {

  apply: any;
  title: string = '';
  subtitle: string = '';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public applyProf: ApplyProvider
    ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyFormPage');
  }

  toSubmit(){
    console.log(this.subtitle)
    this.applyProf.postAddticket('0001',this.title,this.subtitle).subscribe(Response =>{
      console.log(Response);
    });
    this.navCtrl.setRoot(ApplyPage);
  }

}
