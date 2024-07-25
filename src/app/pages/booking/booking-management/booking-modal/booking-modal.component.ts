import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BookingService } from 'src/app/core/services/booking.service';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';


@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.scss']
})
export class BookingModalComponent {
  form!: FormGroup; // Use definite assignment assertion


  constructor(
    private dialogRef: MatDialogRef<BookingModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.initForm();
  
  }

  initForm(): void {
    this.form = this.fb.group({
      id: [null, [Validators.required, Validators.maxLength(255)]],
      name: [null, [Validators.required, Validators.maxLength(255)]],
      email: [null, [Validators.required, Validators.maxLength(255)]],
      phone: [null, Validators.pattern('^(0[1-9])+([0-9]{8})\\b')],
      bookingTime: [null, Validators.required],
      branchCode: [null, [Validators.email, Validators.maxLength(255)]],
      product: [null, [Validators.email, Validators.maxLength(255)]],
      status: [null, [Validators.email, Validators.maxLength(255)]],
    });

    // If data.user exists, update the form values
    if (this.data?.booking) {
      const bookingData = this.data.booking;
      this.form.patchValue({
        id: bookingData.id,
        name: bookingData.name,
        email: bookingData.email,
        phone: bookingData.phone,
        bookingTime: bookingData.bookingTime,
        branchCode: bookingData.branchCode,
        product: bookingData.product,
        status: bookingData.status
      });
    }
  }

  save(): void {
    if (this.form.valid) {
      alert('Dữ liệu hợp lệ');
      this.dialogRef.close(this.form.value);
    } else {
      alert('Dữ liệu không hợp lệ');
    }
  }

  submit() {
    if (this.form.valid) {
      console.log("Dữ liệu hợp lệ");
      const payload = this.form.value;
      if (this.data.type === 'CREATE') {
        this.create(payload);
      } else if (this.data.type === 'UPDATE') {
        this.update(payload);
      }
    }
  }


  create(payload: any) {
    this.bookingService.create(payload).subscribe((res: any) => {
      if (res?.errorCode === '0') {
        this.toastr.success('Thông báo', 'Đặt lịch thành công');
        this.dialogRef.close(this.form.value);
      } else if (res?.errorCode === '2') {
        this.toastr.warning('Thông báo', 'Mã đặt lịch đã tồn tại trong hệ thống');
      } else if (res?.errorCode === '1') {
        this.toastr.error('Thông báo', 'Đặt lịch thất bại');
      }
    })
  }

  update(payload: any) {
    this.bookingService.update(payload).subscribe((res: any) => {
      if (res?.errorCode === '0') {
        this.toastr.success('Thông báo', 'Cập nhật thành công');
        this.dialogRef.close(this.form.value);
      } else if (res?.errorCode === '2') {
        this.toastr.warning('Thông báo', 'Thông tin đã tồn tại trong hệ thống');
      } else if (res?.errorCode === '1') {
        this.toastr.error('Thông báo', 'Cập nhật thất bại');
      }
    })
  }

  close(): void {
    this.dialogRef.close();
  }
}

