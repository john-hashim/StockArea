import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription,Observable } from 'rxjs';
import { WarehouseDataModel } from 'src/app/model/warehousedatamodel';
import {WarehousedataService } from '../../services/warehousedata.service';

@Component({
  selector: 'app-warehouse-details',
  templateUrl: './warehouse-details.component.html',
  styleUrls: ['./warehouse-details.component.scss']
})
export class WarehouseDetailsComponent implements OnInit {

  constructor(private WarehousedataService:WarehousedataService) { }
  val:WarehouseDataModel[]=[]
  data:WarehouseDataModel[]=[]
  is_live:boolean=true;
  hidden=true;
  updatedData:WarehouseDataModel={
    name:null,
    code:null,
    id:null,
    city:null,
    space_available:null,
    type:null,
    cluster:null,
    is_registered:null,
    is_live:null
  }
  blink:boolean=true;
  ngOnInit() {
    this.WarehousedataService.filterData
    .subscribe(val=>{
      this.data=val
      this.is_live=val[0].is_live;
    })
    setInterval(()=>{
      this.blink=!this.blink
    },1000)
  }
  updateList(){ 

    
  }
  cancelUpdate(){
    this.hidden=true;
  }
  hideDetails(){
    this.hidden=true;
  }

}
