import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CostDriverComponent } from '../cost-driver/cost-driver.component';

@Component({
  selector: 'app-modal-cost',
  templateUrl: './modal-cost.component.html',
  styleUrls: ['./modal-cost.component.scss']
})
export class ModalCostComponent {
  constructor(
    public dialogRef: MatDialogRef<CostDriverComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){}
}
