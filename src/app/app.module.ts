import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import {HttpModule} from '@angular/http';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import {LogOut} from "./logout";
import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";
import {InboxPage} from "../pages/inbox/inbox";
import {HelpPage} from "../pages/help/help";
import {PromoPage} from "../pages/promo/promo";
import {TicketsPage} from "../pages/tickets/tickets";
import {TicketsFormPage} from "../pages/tickets-form/tickets-form";
import {TicketsDetailPage} from "../pages/tickets-detail/tickets-detail";
import {ApplyPage} from "../pages/apply/apply";
import {ApplyFormPage} from "../pages/apply-form/apply-form";
import {ApplyDetailPage} from "../pages/apply-detail/apply-detail";
import {ProfilePage} from "../pages/profile/profile";
import {TicketProvider } from '../providers/ticket/ticket';
import {ApplyProvider } from '../providers/apply/apply';

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    InboxPage,
    PromoPage,
    HelpPage,
    LogOut,
    TicketsPage,
    TicketsFormPage,
    TicketsDetailPage,
    ApplyPage,
    ApplyFormPage,
    ApplyDetailPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    InboxPage,
    PromoPage,
    HelpPage,
    LogOut,
    TicketsPage,
    TicketsFormPage,
    TicketsDetailPage,
    ApplyPage,
    ApplyFormPage,
    ApplyDetailPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider,
    TicketProvider,
    ApplyProvider
  ]
})

export class AppModule {
}
