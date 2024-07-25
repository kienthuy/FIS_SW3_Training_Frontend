import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/core/services/department.service';
import { PositionService } from 'src/app/core/services/position.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-position-modal',
  templateUrl: './position-modal.component.html',
  styleUrls: ['./position-modal.component.scss']
})
export class PositionModalComponent {
  form!: FormGroup; // Use definite assignment assertion
  positions: any;

  constructor(
    private dialogRef: MatDialogRef<PositionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private positionService: PositionService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadPositions();
  }

  initForm(): void {
    this.form = this.fb.group({
      code: [null, [Validators.required, Validators.maxLength(20)]],
      name: [null, [Validators.required, Validators.maxLength(255)]],
      position: [null, [Validators.required, Validators.maxLength(255)]],
      department: [null,[Validators.required, Validators.maxLength(255)]],
    });

    // If data.user exists, update the form values
    if (this.data?.position) {
      const positionData = this.data.position;
      this.form.patchValue({
        code: positionData.code,
        name: positionData.name,
        position: positionData.position,
        department: positionData.department,

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

  loadPositions(): void {
    this.positionService.search({}).subscribe((response: any) => {
      if (response.data) {
        this.positions = response.data;

        console.log( this.positions )
      } else {
        this.toastr.error('Failed to load positions');
      }
    });
  }

  create(payload:any){
    console.log("vào hàm tạo")

    this.positionService.create(payload).subscribe( (res:any) => {
      if(res?.errorCode === '0'){
        this.toastr.success('Thông báo','Tạo người dùng thành công');
        this.dialogRef.close(this.form.value);
      } else if (res?.errorCode === '2')  {
        this.toastr.warning('Thông báo','Mã nhân viên đã tồn tại trong hệ thống');
      } else if (res?.errorCode === '1'){
        this.toastr.error('Thông báo','Tạo người dùng thất bại');
      }
    })
  }

  update(payload:any){
    console.log("vào hàm cập nhật")

        this.positionService.update(payload).subscribe( (res:any) => {
        if(res?.errorCode === '0'){
            this.toastr.success('Thông báo','Cập nhật người dùng thành công');
            this.dialogRef.close(this.form.value);
        } else if (res?.errorCode === '2')  {
            this.toastr.warning('Thông báo','Thông tin đã tồn tại trong hệ thống');
        } else if (res?.errorCode === '1'){                   
            this.toastr.error('Thông báo','Cập nhật người dùng thất bại');
        }
      })
    }

  close(): void {
    this.dialogRef.close();
  }
}


