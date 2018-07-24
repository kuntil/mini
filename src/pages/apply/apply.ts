import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApplyFormPage } from '../apply-form/apply-form';
import { ApplyDetailPage } from '../apply-detail/apply-detail';

import { ApplyProvider } from "../../providers/apply/apply";
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

  apply: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public applyProf: ApplyProvider
    ) {
      this.apply = this.applyProf.getAllticket().subscribe(Response =>{
        this.apply = Response.apply;
      })
  }

  ionViewCanEnter(){
    this.apply = this.applyProf.apply;
    // console.log(this.apply);
  }

  toCreateApply(){
    this.navCtrl.push(ApplyFormPage);
  }

  toDetailApply(app:any){
    this.navCtrl.push(ApplyDetailPage,{apply:app});
  }
}
