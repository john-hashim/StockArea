import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject }from 'rxjs';
import { WarehouseDataModel } from '../model/warehousedatamodel';
import {map,filter} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WarehousedataService {

  private SelectedWareHouseSubject=new Subject<WarehouseDataModel>();
  wareHouseData:Observable<any>;
  filterData:Observable<any>;
  constructor(private http:HttpClient) { }
  GetData(){
    this.wareHouseData= this.http.get('assets/warehouses.json');
    return this.wareHouseData;
  }
  filterSelectedItem(id){
    this.filterData=this.wareHouseData.pipe(
      map(items => 
       items.filter(item=>item.id==id)));
  }


}
