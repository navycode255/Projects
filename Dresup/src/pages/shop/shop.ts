import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor (private navCtrl: NavController)  {}

  onCart() {
    this.navCtrl.push(CartPage, {mode: 'New'});
  }

}
