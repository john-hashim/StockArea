import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarehouseListComponent } from '../app/components/warehouse-list/warehouse-list.component';
import { WarehouseDetailsComponent } from './components/warehouse-details/warehouse-details.component';


const routes: Routes = [
      {path:'warehouse-list',component:WarehouseListComponent},
      {path:'warehouse-details',component:WarehouseDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
