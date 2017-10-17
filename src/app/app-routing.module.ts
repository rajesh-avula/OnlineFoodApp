import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'items', loadChildren: 'app/items/item.module#ItemsModule' },
  { path: 'orders', component: OrdersComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
 ];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
