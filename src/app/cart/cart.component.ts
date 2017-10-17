import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Http } from '@angular/http';
import { ItemService } from '../items/item.service';
import { Cart } from '../cart/Cart';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  selectedItems: any = [];
  selectedItemsCount: any= 0;
  deliveryCharge:any=0;
  subTotal: any= 0;
  grandTotal: any = 0;
  quantity: any = 0;
  submit: boolean=false;
  constructor(private _http: Http, private _itemService: ItemService,
    private _route: ActivatedRoute, private _router: Router) {
      this.selectedItems = this._itemService.selectedItems;
      for (let i = 0; i < this.selectedItems.length; i++) {
          this.grandTotal += this.selectedItems[i].totalPrice;
          this.quantity += this.selectedItems[i].quantity;
      }
      if(this.grandTotal<400 && this.grandTotal>0){
          this.deliveryCharge=50;
      }
      if (_itemService.selectedItems.length > 0) {
        this.selectedItemsCount = this._itemService.selectedItemsCount;
        this.subTotal = Number(sessionStorage.getItem('grandTotal'));
   }
     }
  updateCart(item: Cart) {
      item.totalPrice = item.price * item.quantity;
      this.grandTotal = 0;
      this.quantity = 0;
      for (let i = 0; i < this.selectedItems.length; i++) {
          this.grandTotal += this.selectedItems[i].totalPrice;
          this.quantity += this.selectedItems[i].quantity;
      }
  }
     onBack(): void {
         this._router.navigate(['/items', this.selectedItems]);
  }

  checkout() {
      this.submit = true;
      this.selectedItems=[];
      this.selectedItemsCount=0;
      this.grandTotal=0;
      this.deliveryCharge=0;
      this._itemService.selectedItems=[];
      this._itemService.selectedItemsCount=0;
      sessionStorage.setItem('grandTotal', JSON.stringify(0));
      sessionStorage.setItem('selectedItemsCount', JSON.stringify(0));
      sessionStorage.setItem('orderTotal', JSON.stringify(0));
      sessionStorage.setItem('selectedItems', JSON.stringify(this.selectedItems));
      
  }

  gotoItems() {
      this._router.navigate(['/items']);
  }
}
