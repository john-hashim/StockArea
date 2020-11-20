import { Component, OnInit } from '@angular/core';
import { WarehousedataService } from './services/warehousedata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stockarea';
  constructor(private warehousedataService:WarehousedataService){}
  onClick(){
    this.warehousedataService.GetData();
    setTimeout(function(){
      window.scrollTo({
        top: 750,
        behavior: 'smooth'
      });
    });
  }
  ngOnInit(){
    this.warehousedataService.GetData();
  }
}
