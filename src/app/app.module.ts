import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarehouseListComponent } from './components/warehouse-list/warehouse-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ListRoutingModule } from '../app/components/warehouse-list/list-routing.module';
import { WarehouseDetailsComponent } from './components/warehouse-details/warehouse-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseListComponent,
    WarehouseDetailsComponent,

  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ListRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
