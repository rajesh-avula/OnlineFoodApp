import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ItemService} from '../item.service';
import { Item } from '../Item';
@Component({
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent  {
  pageTitle = 'Items Detail';
  item: Item;
  id = 0;
  items: any= [];
  selectedItems: any = [];
  selectedItemsCount: any = 0;
  imageWidth = 100;
  errorMessage: string;
  imageHeight = 100;
  orderTotal: any = 0;
  constructor(private route: ActivatedRoute,
    private _router: Router, public _itemService: ItemService) {
      this.selectedItems = JSON.parse(sessionStorage.getItem('selectedItems'));
      this.id = + this.route.snapshot.paramMap.get('id');
      this._itemService.getItems()
      .subscribe(
      items => {
        this._itemService.items = items;
        this.items = items;
        this.item = this._itemService.items.filter((item: any) => item.itemId === this.id)[0];
      },
      error => this.errorMessage = <any>error);
      if (this.selectedItems && this.selectedItems.length > 0) {
        this.selectedItemsCount = this.selectedItems.length;
        for (let i = 0; i < this.selectedItems.length; i++) {
          this.orderTotal += this.selectedItems[i].totalPrice;
        }
      }
     }

  onBack(): void {
      this._router.navigate(['/items']);
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
