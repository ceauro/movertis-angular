import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { ModalCostComponent } from '../modal-cost/modal-cost.component';

@Component({
  selector: 'app-cost-driver',
  templateUrl: './cost-driver.component.html',
  styleUrls: ['./cost-driver.component.scss']
})
export class CostDriverComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  Cost: any = [];
  displayedColumns: string[] = ['amount', 'date', 'unit', 'typeCost', 'description'];

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.loadCosts(); 
  }

  loadCosts() {
    if(this.id){
      this.restApi.getDriverCosts(this.id).subscribe((data: {}) => {
        this.Cost = data;
        
        this.Cost.forEach(element => {
          element.date = this.getDate(element.date);
        });

        this.openModal();
      });
    } else {
      console.log("ID INDEFINIDA");
    }
  }

  private openModal(){
    this.dialog.open(ModalCostComponent, {
      width:'900px',
      data: {
        costs: this.Cost,
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
