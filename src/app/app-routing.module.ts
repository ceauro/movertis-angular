import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDriversComponent } from './all-drivers/all-drivers.component';
import { CostDriverComponent } from './cost-driver/cost-driver.component';
import { DriverActivityComponent } from './driver-activity/driver-activity.component';
import { KmsByTripComponent } from './kms-by-trip/kms-by-trip.component';
import { UnitsByDriverComponent } from './units-by-driver/units-by-driver.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'all-drivers'},
  {path: 'all-drivers', component: AllDriversComponent},
  {path: 'cost-driver/:id', component: CostDriverComponent},
  {path: 'driver-activity/:id', component: DriverActivityComponent},
  {path: 'summary-kms/:id', component: KmsByTripComponent},
  {path: 'units-by-driver/:id', component: UnitsByDriverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
