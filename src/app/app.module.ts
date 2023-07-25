import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllDriversComponent } from './all-drivers/all-drivers.component';
import { UnitsByDriverComponent } from './units-by-driver/units-by-driver.component';
import { KmsByTripComponent } from './kms-by-trip/kms-by-trip.component';
import { DriverActivityComponent } from './driver-activity/driver-activity.component';
import { CostDriverComponent } from './cost-driver/cost-driver.component';
import { ModalComponent } from './modal/modal.component';

import { HttpClientModule } from '@angular/common/http'

import { MatButtonModule } from '@angular/material/button' 
import { MatTableModule } from '@angular/material/table'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { ModalActivityComponent } from './modal-activity/modal-activity.component';
import { ModalCostComponent } from './modal-cost/modal-cost.component';
import { ModalKilometersComponent } from './modal-kilometers/modal-kilometers.component'


@NgModule({
  declarations: [
    AppComponent,
    AllDriversComponent,
    UnitsByDriverComponent,
    KmsByTripComponent,
    DriverActivityComponent,
    CostDriverComponent,
    ModalComponent,
    ModalActivityComponent,
    ModalCostComponent,
    ModalKilometersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
