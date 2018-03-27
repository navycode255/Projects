import { Component } from "@angular/core";
import { StylesPage } from "../styles/styles";
import { BookmarkPage } from "../bookmark/bookmark";
import { HelpPage } from "../help/help";
import { ContactsPage } from "../contacts/contacts";
import { AlertsPage } from "../alerts/alerts";
import { ShopPage } from "../shop/shop";
import { AccountPage } from "../account/account";

@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
            <ion-tab [root]="stylesPage" tabIcon="home"></ion-tab>
            <ion-tab [root]="bookmarkPage" tabIcon="flame"></ion-tab>
            <ion-tab [root]="alertsPage" tabIcon="chatbubbles"></ion-tab>
            <ion-tab [root]="shopPage" tabIcon="cart"></ion-tab>
            <ion-tab [root]="accountPage" tabIcon="contact"></ion-tab>

        </ion-tabs>
    `
})

export class TabsPage {
    stylesPage = StylesPage;
    bookmarkPage = BookmarkPage;
    alertsPage = AlertsPage;
    shopPage = ShopPage;
    accountPage = AccountPage;
}