import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './booking-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { BookingGuestComponent } from './booking-guest/booking-guest.component';
import { BookingManagementComponent } from './booking-management/booking-management.component';
import { BookingModalComponent } from './booking-management/booking-modal/booking-modal.component';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    BookingGuestComponent,
    BookingManagementComponent,
    BookingModalComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    ToastrModule.forRoot(), // ToastrModule added
    MatNativeDateModule
  ]
})
export class BookingModule { }
