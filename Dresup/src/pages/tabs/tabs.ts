import { Component } from "@angular/core";
import { StylesPage } from "../styles/styles";
import { BookmarkPage } from "../bookmark/bookmark";
import { NotificationsPage } from "../notifications/notifications";
import { HelpPage } from "../help/help";

@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
            <ion-tab [root]="stylesPage" tabIcon="star"></ion-tab>
            <ion-tab [root]="bookmarkPage" tabIcon="bookmarks"></ion-tab>
            <ion-tab [root]="notificationsPage" tabIcon="bookmark"></ion-tab>
            <ion-tab [root]="helpPage" tabIcon="medkit"></ion-tab>

        </ion-tabs>
    `
})

export class TabsPage {
    stylesPage = StylesPage;
    bookmarkPage = BookmarkPage;
    notificationsPage = NotificationsPage;
    helpPage = HelpPage;
}