import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { WarehouseDataModel }from '../../model/warehousedatamodel';
import {WarehousedataService } from '../../services/warehousedata.service';
import {map,filter} from 'rxjs/operators'
@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent implements OnInit {

  constructor(private warehouseDataService:WarehousedataService) { }

  wareHouseList:WarehouseDataModel[]=[{
    name:null,
    code:null,
    id:null,
    city:null,
    space_available:null,
    type:null,
    cluster:null,
    is_registered:null,
    is_live:null
  }];
  selectedItem:WarehouseDataModel=null;

  listOfCity=[];
  listOfSpace=[10,100,1000,10000,100000];
  listOfCluster=[];

  selectedCity:string;
  selectedCluster:string;
  selectedSpace:string;

  ngOnInit(): void {
      this.warehouseDataService.wareHouseData.subscribe(val=>{
        this.wareHouseList=val;
        this.wareHouseList.forEach(value=>{
          if(this.listOfCity.includes(value.city)){
            this.listOfCity=this.listOfCity;
          }else{
            this.listOfCity.push(value.city);
          }
          if(this.listOfCluster.includes(value.cluster)){
            this.listOfCluster=this.listOfCluster;
          }else{
            this.listOfCluster.push(value.cluster);
          }

      })
      })
  }
  onSelect(item){
      this.warehouseDataService.filterSelectedItem(item.id);
  }
  onChangeCity(){
    this.selectedCluster="all";
    this.selectedSpace="all";
    if(this.selectedCity=="all"){
      this.warehouseDataService.wareHouseData.subscribe(val=>{
        this.wareHouseList=val})
    }else{
    this.warehouseDataService.wareHouseData.pipe(
    map(items => 
    items.filter(item=>item.city==this.selectedCity)))
    .subscribe(items=>this.wareHouseList=items)
    }

  }
  onChangeSpace(){
    this.selectedCity="all";
    this.selectedCluster="all";
    if(this.selectedSpace=="all"){
      this.warehouseDataService.wareHouseData.subscribe(val=>{
        this.wareHouseList=val
      })
    }else{
      this.warehouseDataService.wareHouseData.pipe(
        map(items => 
        items.filter(item=>item.space_available<this.selectedSpace)))
        .subscribe(items=>this.wareHouseList=items)
    }
  }
  onChangeCluster(){
    this.selectedCity="all";
    this.selectedSpace="all";
    if(this.selectedCluster=="all"){
      this.warehouseDataService.wareHouseData.subscribe(val=>{
        this.wareHouseList=val
      })
    }else{
    this.warehouseDataService.wareHouseData.pipe(
      map(items => 
      items.filter(item=>item.cluster==this.selectedCluster)))
      .subscribe(items=>this.wareHouseList=items)
      }  
  }
}
