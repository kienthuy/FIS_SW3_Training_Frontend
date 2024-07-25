import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Booking } from 'src/app/core/model/booking.modal';
import { BookingService } from 'src/app/core/services/booking.service';
import { BookingModalComponent } from './booking-modal/booking-modal.component';

@Component({
  selector: 'app-booking-management',
  templateUrl: './booking-management.component.html',
  styleUrls: ['./booking-management.component.scss']
})
export class BookingManagementComponent implements OnInit {

    bookings: Booking[] = [];
    loading = false;
  
    constructor(
      private dialog: MatDialog,
      private bookingService: BookingService
    ) { }
  
    ngOnInit(): void {
      this.search();
    }
  
    search() {
      this.loading = true;
      const payload = {};
      this.bookingService.search(payload).subscribe((res) => {
        if (res && res.data) {
          this.bookings = res.data;
          this.loading = false;
        }else{
          this.loading = false;
        }
      });
    }
  
    openModal(booking: any, type:any): void {
      const dialogRef = this.dialog.open(BookingModalComponent, {
        width: '800px',
        data: { 
          booking: booking ,
          type : type
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.search();
        }
      });
    }
  
  
  }
