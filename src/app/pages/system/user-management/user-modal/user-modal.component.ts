import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/core/services/department.service';
import { PositionService } from 'src/app/core/services/position.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {
  form!: FormGroup; // Use definite assignment assertion
  departments: any;
  positions: any;

  constructor(
    private dialogRef: MatDialogRef<UserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private departmentService: DepartmentService,
    private positionService: PositionService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadDepartments();
    this.loadPositions();
  }

  initForm(): void {
    this.form = this.fb.group({
      code: [null, [Validators.required, Validators.maxLength(20)]],
      name: [null, [Validators.required, Validators.maxLength(255)]],
      position: [null, [Validators.required, Validators.maxLength(255)]],
      department: [null, [Validators.required, Validators.maxLength(255)]],
      email: [null, [Validators.email, Validators.maxLength(255)]],
      phone: [null, Validators.pattern('^(0[1-9])+([0-9]{8})\\b')]
    });

    // If data.user exists, update the form values
    if (this.data?.user) {
      const userData = this.data.user;
      this.form.patchValue({
        code: userData.code,
        name: userData.name,
        position: userData.position,
        department: userData.department,
        email: userData.email,
        phone: userData.phone
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

  loadDepartments(): void {
    this.departmentService.search({}).subscribe((response: any) => {
      if (response.data) {
        this.departments = response.data;
      } else {
        this.toastr.error('Failed to load departments');
      }
    }, (error: any) => {
      console.error('Error loading departments:', error);
      this.toastr.error('Failed to load departments');
    });
  }

  loadPositions(): void {
    this.positionService.search({}).subscribe((response: any) => {
      if (response.data) {
        this.positions = response.data;
      } else {
        this.toastr.error('Failed to load positions');
      }
    }, (error: any) => {
      console.error('Error loading positions:', error);
      this.toastr.error('Failed to load positions');
    });
  }

  create(payload: any) {
    this.userService.create(payload).subscribe((res: any) => {
      if (res?.errorCode === '0') {
        this.toastr.success('Thông báo', 'Tạo người dùng thành công');
        this.dialogRef.close(this.form.value);
      } else if (res?.errorCode === '2') {
        this.toastr.warning('Thông báo', 'Mã nhân viên đã tồn tại trong hệ thống');
      } else if (res?.errorCode === '1') {
        this.toastr.error('Thông báo', 'Tạo người dùng thất bại');
      }
    })
  }

  update(payload: any) {
    this.userService.update(payload).subscribe((res: any) => {
      if (res?.errorCode === '0') {
        this.toastr.success('Thông báo', 'Cập nhật người dùng thành công');
        this.dialogRef.close(this.form.value);
      } else if (res?.errorCode === '2') {
        this.toastr.warning('Thông báo', 'Thông tin đã tồn tại trong hệ thống');
      } else if (res?.errorCode === '1') {
        this.toastr.error('Thông báo', 'Cập nhật người dùng thất bại');
      }
    })
  }

  close(): void {
    this.dialogRef.close();
  }
}
