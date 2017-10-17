import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ItemService} from '../item.service';
import { Item } from '../Item';
@Component({
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent  {
  pageTitle: string = 'Items Detail';
  item: Item;
  id: number = 0;
  selectedItems: any = [];
  selectedItemsCount: any = 0;
  imageWidth: number = 100;
  imageHeight: number = 100;
  orderTotal: any = 0;
  constructor(private route: ActivatedRoute,
    private router: Router, public _itemService: ItemService) {
      this.selectedItems = this._itemService.selectedItems;
      if (this.selectedItems && this.selectedItems.length > 0) {
        this.selectedItemsCount = Number(sessionStorage.getItem('selectedItemsCount'));
        this.orderTotal = Number(sessionStorage.getItem('orderTotal'));
      }
      this.id=+this.route.snapshot.paramMap.get('id');
      this.item=this._itemService.items.filter((item:any)=> item.itemId === this.id)[0];
     }

  onBack(): void {
      this.router.navigate(['/items']);
  }

}
