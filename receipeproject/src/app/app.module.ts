import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {unlessdirective} from './unless.directive';
import { ReceipebookComponent } from './receipebook/receipebook.component';
import { ReceipelistComponent } from './receipebook/receipelist/receipelist.component';
import { ReceipedetailsComponent } from './receipebook/receipedetails/receipedetails.component';
import { ReceipeitemComponent } from './receipebook/receipelist/receipeitem/receipeitem.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { HeaderComponent } from './header/header.component';
import {dropdowndirective} from './shared/dropdown.directive';
import {receipeService} from './receipebook/receipeservice.service';
import {shoppingListService} from './shoppinglist/shoppinglistservice.service';
import { ReceipeeditComponent } from './receipebook/receipeedit/receipeedit.component';
import { approutes } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    unlessdirective,
    ReceipebookComponent,
    ReceipelistComponent,
    ReceipedetailsComponent,
    ReceipeitemComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    HeaderComponent,
    dropdowndirective,
    ReceipeeditComponent
  ],
  imports: [
    BrowserModule,FormsModule,approutes,FormsModule,ReactiveFormsModule
  ],
  providers: [shoppingListService,receipeService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
