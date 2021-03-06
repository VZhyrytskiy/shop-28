import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartListService } from './cart-list/cart-list.service';
import { FirstComponent } from './first/first.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './product/products.service';

@NgModule({
    declarations: [
        AppComponent,
        FirstComponent,
        ProductComponent,
        ProductListComponent,
        CartListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [ProductsService, CartListService],
    bootstrap: [AppComponent]
})
export class AppModule { }
