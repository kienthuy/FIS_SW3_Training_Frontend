import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Position } from 'src/app/core/model/position.modal';
import { PositionService } from 'src/app/core/services/position.service';
import { PositionModalComponent } from './position-modal/position-modal.component';

@Component({
  selector: 'app-position-management',
  templateUrl: './position-management.component.html',
  styleUrls: ['./position-management.component.scss']
})
export class PositionManagementComponent {
  positions: Position[] = [];
  loading = false;

  constructor(
    private dialog: MatDialog,
    private positionService: PositionService
  ) { }

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.loading = true;
    const payload = {};
    this.positionService.search(payload).subscribe((res) => {
      if (res && res.data) {
        this.positions = res.data;
        this.loading = false;
      }else{
        this.loading = false;
      }
    });
  }

  openModal(position: any, type:any): void {
    const dialogRef = this.dialog.open(PositionModalComponent, {
      width: '800px',
      data: { 
        position: position ,
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