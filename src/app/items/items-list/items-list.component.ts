import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../Item';
import { ItemService } from '../item.service';
import { Cart } from '../../cart/Cart';
@Component({
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent  {
  items: any= [];
  paymentStatus  = false;
  orderId  = 0;
  errorMessage: string;
  pageTitle = 'Cart' ;
  cart: Cart;
  selectedItems: any = [];
  selectedItemsCount: any= 0;
  subTotal: any = 0;
  orderTotal: any= 0;
  constructor(private _router: Router, private _itemService: ItemService) {
    this.paymentStatus = false;
    this.selectedItems = JSON.parse(sessionStorage.getItem('selectedItems'));
    this._itemService.getItems()
            .subscribe(
            items => {
              this._itemService.items = items;
              this.items = items;
            },
            error => this.errorMessage = <any>error);
    if (this.selectedItems && this.selectedItems.length > 0) {
      this.selectedItemsCount = this.selectedItems.length;
      for (let i = 0; i < this.selectedItems.length; i++) {
        this.orderTotal += this.selectedItems[i].totalPrice;
      }
    }
  }
  addCart(id: number) {
    this.cart = new Cart();
    this.selectedItemsCount += 1;
    const item = this._itemService.items.filter((item: any) => item.itemId === id)[0];
    this.subTotal += item.price;
    this.orderTotal += item.price;
    const selected = this._itemService.selectedItems.filter(( item: any) => item.itemId === id)[0];
    if (selected) {
      const index = this._itemService.selectedItems.findIndex((item: any) => item.itemId === id);
      this._itemService.selectedItems[index].quantity += 1;
      this._itemService.selectedItems[index].totalPrice += item.price;
    }
    else {
      this._itemService.selectedItemsCount += 1;
      this.cart.orderId = 'ORD_' + this.orderId;
      this.cart.itemId = id;
      this.cart.itemName = item.itemName;
      this.cart.price = item.price;
      this.cart.quantity = 1;
      this.cart.dateOfPurchase = new Date().toString();
      this.cart.totalPrice = item.price * this.cart.quantity;
      this._itemService.selectedItems.push(this.cart);
      sessionStorage.setItem('selectedItems', JSON.stringify(this._itemService.selectedItems));
      this.orderId++;
    }
  }
  filteredItems(categoryType: string) {
    if (categoryType === 'all') {
      this.items = this._itemService.items;
    }
    else{
      this.items = this._itemService.items.filter(item => item.category === categoryType);
    }
  }
  itemsCount(): boolean {
    if (this.selectedItemsCount > 0) {
        return true;
    }
    else {
        return false;
    }
  }
  goToCart() {
    this._router.navigate(['/cart']);
  }

}
