import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarehouseDetailsComponent } from '../warehouse-details/warehouse-details.component';


const routes: Routes = [
  // {path:'warehouse-details',component:WarehouseDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
