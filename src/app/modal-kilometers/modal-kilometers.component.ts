import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { KmsByTripComponent } from '../kms-by-trip/kms-by-trip.component';

@Component({
  selector: 'app-modal-kilometers',
  templateUrl: './modal-kilometers.component.html',
  styleUrls: ['./modal-kilometers.component.scss']
})
export class ModalKilometersComponent {
  constructor(
    public dialogRef: MatDialogRef<KmsByTripComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){}
}
