import { Component } from "@angular/core";
import { StylesPage } from "../styles/styles";
import { BookmarkPage } from "../bookmark/bookmark";
import { HelpPage } from "../help/help";
import { ContactsPage } from "../contacts/contacts";

@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
            <ion-tab [root]="stylesPage" tabIcon="star"></ion-tab>
            <ion-tab [root]="bookmarkPage" tabIcon="bookmarks"></ion-tab>
            <ion-tab [root]="contactsPage" tabIcon="contacts"></ion-tab>
            <ion-tab [root]="helpPage" tabIcon="medkit"></ion-tab>

        </ion-tabs>
    `
})

export class TabsPage {
    stylesPage = StylesPage;
    bookmarkPage = BookmarkPage;
    contactsPage = ContactsPage;
    helpPage = HelpPage;
}