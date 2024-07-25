import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/core/services/department.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-department-modal',
  templateUrl: './department-modal.component.html',
  styleUrls: ['./department-modal.component.css']
})
export class DepartmentModalComponent implements OnInit{
  form!: FormGroup;
  item:any;
  listStatus = [
    { code: 'active', name: 'Hoạt động' },
    { code: 'inactive', name: 'Ngưng hoạt động' }
  ];

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private toastr: ToastrService,

    public dialogRef: MatDialogRef<DepartmentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.item = this.data.department;

    this.form = this.fb.group({
      code: [ null, [Validators.required, Validators.maxLength(20)]],
      name: [ null, [Validators.required, Validators.maxLength(255)]],
      nameEn: [ null, [Validators.required, Validators.maxLength(255)]],
      status: [null, Validators.required]
    });

    if(this.item){
      this.form.patchValue({
        code: this.item.code ,
        name: this.item.name ,
        nameEn: this.item.nameEn ,
        status: this.item.status ,
      })
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

  submit(){
    if (this.form.valid) {
      console.log("Dữ liệu hợp lệ");
      const payload = this.form.value;
      if(this.data.type === 'CREATE'){
        this.create(payload);
      } else if (this.data.type === 'UPDATE'){
        this.update(payload);
      }
    }
  }

  create(payload:any){
    console.log("vào hàm tạo")

    this.departmentService.create(payload).subscribe( (res:any) => {
      if(res?.errorCode === '0'){
        this.toastr.success('Thông báo','Tạo phòng ban thành công');
        this.dialogRef.close(this.form.value);
      } else if (res?.errorCode === '2')  {
        this.toastr.warning('Thông báo','Mã phòng ban đã tồn tại trong hệ thống');
      } else if (res?.errorCode === '1'){
        this.toastr.error('Thông báo','Tạo phòng ban thất bại');
      }
    })
  }

  update(payload:any){
    console.log("vào hàm cập nhật")

        this.departmentService.update(payload).subscribe( (res:any) => {
        if(res?.errorCode === '0'){
            this.toastr.success('Thông báo','Cập nhật phòng ban thành công');
            this.dialogRef.close(this.form.value);
        } else if (res?.errorCode === '2')  {
            this.toastr.warning('Thông báo','Thông tin đã tồn tại trong hệ thống');
        } else if (res?.errorCode === '1'){
            this.toastr.error('Thông báo','Cập nhật phòng ban thất bại');
        }
      })
    }

  close(): void {
    this.dialogRef.close();
  }
}

