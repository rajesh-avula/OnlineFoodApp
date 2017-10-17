import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemsRoutingModule } from './items-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ItemsRoutingModule
  ],
  declarations: [ItemsListComponent, ItemDetailComponent],
  providers: []
})
export class ItemsModule { }
