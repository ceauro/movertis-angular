import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-units-by-driver',
  templateUrl: './units-by-driver.component.html',
  styleUrls: ['./units-by-driver.component.scss']
})
export class UnitsByDriverComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  Units: any = [];
  displayedColumns: string[] = ['unitId', 'actions'];

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
    public dialog: MatDialog
  ){}

  ngOnInit() {
    this.loadUnits();  
  }

 loadUnits(){
    if(this.id){
      this.restApi.getDriverUnits(this.id).subscribe((data: {}) => {
        this.Units = data;
        this.openModal();
      });
    } else {
      console.log("ID INDEFINIDA");
    }
  }

  private openModal(){
    this.dialog.open(ModalComponent, {
      width:'300px',
      data: {
        units: this.Units,
        displayedColumns: this.displayedColumns
      }
    })
  }
}
