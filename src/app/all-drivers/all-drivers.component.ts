import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-all-drivers',
  templateUrl: './all-drivers.component.html',
  styleUrls: ['./all-drivers.component.scss']
})
export class AllDriversComponent implements OnInit {

  displayedColumns: string[] = ['driverId', 'name', 'phone', 'actions'];
  Driver: any = [];

 constructor(public restApi: RestApiService){}

  ngOnInit() {
    this.loadDrivers();
  }

  loadDrivers(){
    return this.restApi.getDrivers().
            subscribe((data: {}) =>{
              this.Driver = data;
            });
  }
}
