import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserModalComponent } from './user-modal/user-modal.component';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/model/user.modal';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  loading = false;

  constructor(
    private dialog: MatDialog,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.loading = true;
    const payload = {};
    this.userService.search(payload).subscribe((res) => {
      if (res && res.data) {
        this.users = res.data;
        this.loading = false;
      }else{
        this.loading = false;
      }
    });
  }

  openModal(user: any, type:any): void {
    const dialogRef = this.dialog.open(UserModalComponent, {
      width: '800px',
      data: { 
        user: user ,
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
