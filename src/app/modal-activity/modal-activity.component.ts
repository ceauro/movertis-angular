import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DriverActivityComponent } from '../driver-activity/driver-activity.component';

@Component({
  selector: 'app-modal-activity',
  templateUrl: './modal-activity.component.html',
  styleUrls: ['./modal-activity.component.scss']
})
export class ModalActivityComponent {

  constructor(
    public dialogRef: MatDialogRef<DriverActivityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){}
}
