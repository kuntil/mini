import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { LogOut } from "./logout";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { InboxPage } from "../pages/inbox/inbox";
import { HelpPage } from "../pages/help/help";
import { PromoPage } from "../pages/promo/promo"; 
import { TicketsPage } from "../pages/tickets/tickets";
import { ApplyPage } from "../pages/apply/apply";
import { ProfilePage } from "../pages/profile/profile";

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Profile', component: ProfilePage, icon: 'person'},
      {title: 'Apply', component: ApplyPage, icon: 'md-paper'},
      {title: 'Tickets', component: TicketsPage, icon: 'md-list-box'},
      {title: 'Promo', component: PromoPage, icon: 'md-pricetags'},
      {title: 'Help', component: HelpPage, icon: 'md-help-circle'},
      {title: 'Inbox', component: InboxPage, icon: 'md-mail-open'},
      {title: 'Logout', component: LogOut, icon: 'md-power'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
