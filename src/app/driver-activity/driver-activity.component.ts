import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { ModalActivityComponent } from '../modal-activity/modal-activity.component';

@Component({
  selector: 'app-driver-activity',
  templateUrl: './driver-activity.component.html',
  styleUrls: ['./driver-activity.component.scss']
})
export class DriverActivityComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  Status: any = {};
  displayedColumns: string[] = ['actualActivity', 'nextRest'];

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
    public dialog: MatDialog
  ){}


  ngOnInit(): void {
    this.loadUnits();  
  }

  loadUnits() {
    if(this.id){
      this.restApi.getDriverStatus(this.id).subscribe((data: {}) => {
        this.Status = data;
        this.Status.nextRest = this.getDate(this.Status.nextRest);
        this.openModal();
      });
    } else {
      console.log("ID INDEFINIDA");
    }
  }

  private openModal(){
    this.dialog.open(ModalActivityComponent, {
      width:'500px',
      data: {
        status: [this.Status],
        displayedColumns: this.displayedColumns
      }
    })
  }

  private getDate(timestamp: any){
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
