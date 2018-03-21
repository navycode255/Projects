import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { StylesPage } from '../pages/styles/styles';
import { AccountPage } from '../pages/account/account';
import { BookmarkPage } from '../pages/bookmark/bookmark';
import { ContactsPage } from '../pages/contacts/contacts';
import { HelpPage } from '../pages/help/help';
import { NotificationsPage } from '../pages/notifications/notifications';
import { TrendingPage } from '../pages/trending/trending';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    StylesPage,
    AccountPage,
    BookmarkPage,
    ContactsPage,
    HelpPage,
    NotificationsPage,
    TrendingPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StylesPage,
    AccountPage,
    BookmarkPage,
    ContactsPage,
    HelpPage,
    NotificationsPage,
    TrendingPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
