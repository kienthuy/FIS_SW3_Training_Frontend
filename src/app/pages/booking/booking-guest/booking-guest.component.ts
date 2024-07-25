import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { ToastrService } from 'ngx-toastr';
import { BookingService } from '../../../core/services/booking.service'; 
import { AddressService } from 'src/app/core/services/address.service';

@Component({
  selector: 'app-booking-guest',
  templateUrl: './booking-guest.component.html',
  styleUrls: ['./booking-guest.component.scss'],
})
export class BookingGuestComponent implements OnInit {
  @Input() data: any; 

  form!: FormGroup;

  listProvince: any;
  listDistrict: any;
  listWard: any;
  listBranch: any;
  listProduct: any;
  dialogRef: any;

  constructor(
    private fb: FormBuilder, 
    private bookingService: BookingService, 
    private toastr: ToastrService, 
    private addressService: AddressService,
  ) { }

  ngOnInit(): void {
    this.initForm(); 
    this.getProvince();
    this.getDistrict();
    this.getWard();
    this.getBranch();
    this.getProduct();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(255)]],
      email: [null, [Validators.required, Validators.email, Validators.maxLength(255)]],
      phone: [null, [Validators.required, Validators.pattern('^(0[1-9])+([0-9]{8})\\b')]],
      provinceCode: [null, Validators.required],
      districtCode: [null, Validators.required],
      wardCode: [null, Validators.required],
      branchCode: [null, Validators.required],
      bookingTime: [null, Validators.required],
      product: [null, Validators.required],
    });

    if (this.data?.booking) {
      const bookingData = this.data.booking;
      this.form.patchValue({
        name: bookingData.name,
        email: bookingData.email,
        phone: bookingData.phone,
        provinceCode: bookingData.provinceCode,
        districtCode: bookingData.districtCode,
        wardCode: bookingData.wardCode,
        branchCode: bookingData.branchCode,
        bookingTime: bookingData.bookingTime,
        product: bookingData.product,
      });
    }
  }

  submit() {
    if (this.form.valid) {
      const payload = this.form.value;
      this.create(payload); 
    } else {
      this.form.markAllAsTouched();
    }
  }
  
  create(payload: any) {
    this.bookingService.create(payload).subscribe(
      (res: any) => {
        if (res?.errorCode === '0') {
          this.toastr.success('Thông báo', 'Đặt lịch thành công');
          this.form.reset();
        } else if (res?.errorCode === '2') {
          this.toastr.warning('Thông báo', 'Khung giờ đã tồn tại trong hệ thống');
        } else if (res?.errorCode === '1') {
          this.toastr.error('Thông báo', 'Đặt lịch thất bại');
        }
      },
      error => {
        this.toastr.error('Thông báo', 'Đã xảy ra lỗi khi đặt lịch');
        console.error('Lỗi khi gọi API đặt lịch:', error);
      }
    );
  }

  getProvince(){
    const json = {};
    this.addressService.getProvince(json).subscribe((res:any) => {
      if (res?.errorCode === '0') {
        this.listProvince = res.data;
      }
    });
  }

  getDistrict(){
    const json = {};
    this.addressService.getDistrict(json).subscribe((res:any) => {
      if (res?.errorCode === '0') {
        this.listDistrict = res.data;
      }
    });
  }

  getWard(){
    const json = {};
    this.addressService.getWard(json).subscribe((res:any) => {
      if (res?.errorCode === '0') {
        this.listWard = res.data;
      }
    });
  }

  getBranch(){
    const json = {};
    this.addressService.getBranch(json).subscribe((res:any) => {
      if (res?.errorCode === '0') {
        this.listBranch = res.data;
      }
    });
  }

  getProduct(){
    const json = {};
    this.addressService.getProduct(json).subscribe((res:any) => {
      if (res?.errorCode === '0') {
        this.listProduct = res.data;
      }
    });
  }
}
