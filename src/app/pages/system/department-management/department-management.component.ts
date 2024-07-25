import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentModalComponent } from './department-modal.component/department-modal.component';
import { Department } from 'src/app/core/model/department.modal';
import { DepartmentService } from 'src/app/core/services/department.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-department-management',
  templateUrl: './department-management.component.html',
  styleUrls: ['./department-management.component.scss']
})
export class DepartmentManagementComponent implements OnInit {
  listDepartment: Department[] = [];
  loading = false;

  constructor(
    private dialog: MatDialog,
    private departmentService: DepartmentService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.loading = true;
    const payload = {};
    this.departmentService.search(payload).subscribe((res) => {
      if (res && res.data) {
        this.listDepartment = res.data;
      }
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }

  openModal(department: any): void {
    const dialogRef = this.dialog.open(DepartmentModalComponent, {
      width: '800px',
      data: { department: department, type: department ? 'UPDATE' : 'CREATE' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.listDepartment.findIndex(d => d.code === result.code);
        if (index !== -1) {
          this.listDepartment[index] = result;
        } else {
          this.listDepartment.push(result);
        }
      }
    });
  }
}
