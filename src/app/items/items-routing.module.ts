import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CartComponent } from '../cart/cart.component';
const routes: Routes = [
    {
      path: '',
      children: [
        { path: ':id', component: ItemDetailComponent },
        { path: '', component: ItemsListComponent }
        ]
    }];
@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
export class ItemsRoutingModule { }