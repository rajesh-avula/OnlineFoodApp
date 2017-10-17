import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { OrdersComponent } from './orders/orders.component';
import { ItemService } from './items/item.service';
import { UserService } from './users/user.service';
import { Http, HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ItemService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
