import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home'
@Component({
  selector: 'logout',
  template: ''
})
export class LogOut {

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController) {
    this.showConfirm();
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: '',
      buttons: [
        {
          text: 'No',
          handler: () => {
            this.navCtrl.setRoot(HomePage);
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.logout();
            this.navCtrl.setRoot(LoginPage);

          }
        }
      ]
    });
    confirm.present();
  }

   logout() {
    this.navCtrl.setRoot(LoginPage);
  }
}
