import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingGuestComponent } from './booking-guest/booking-guest.component';
import { BookingManagementComponent } from './booking-management/booking-management.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'booking-guest',
        component: BookingGuestComponent,
      },
      {
        path: 'booking-management',
        component: BookingManagementComponent,
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
