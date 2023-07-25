import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UnitsByDriverComponent } from '../units-by-driver/units-by-driver.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(
    public dialogRef: MatDialogRef<UnitsByDriverComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){}

}
