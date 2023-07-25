import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { ModalKilometersComponent } from '../modal-kilometers/modal-kilometers.component';

@Component({
  selector: 'app-kms-by-trip',
  templateUrl: './kms-by-trip.component.html',
  styleUrls: ['./kms-by-trip.component.scss']
})
export class KmsByTripComponent {

  id = this.actRoute.snapshot.params['id'];
  Kilometers: any = [];
  displayedColumns: string[] = ['totalKms'];

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.loadSummary(); 
  }

  loadSummary() {
    if(this.id){
      this.restApi.getKilometers(this.id).subscribe((data: {}) => {
        this.Kilometers = [data];
        console.log(data)
        this.openModal();
      });
    } else {
      console.log("ID INDEFINIDA");
    }
  }

  private openModal(){
    this.dialog.open(ModalKilometersComponent, {
      width:'300px',
      data: {
        kilometers: this.Kilometers,
        displayedColumns: this.displayedColumns
      }
    })
  }

}
