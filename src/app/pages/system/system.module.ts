import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { DepartmentManagementComponent } from './department-management/department-management.component';
import { UserModalComponent } from './user-management/user-modal/user-modal.component';
import { DepartmentModalComponent } from './department-management/department-modal.component/department-modal.component';
import { ToastrModule } from 'ngx-toastr';
import { PositionManagementComponent } from './position-management/position-management.component';
import { PositionModalComponent } from './position-management/position-modal/position-modal.component';
import { MaterialModule } from '../../material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    UserManagementComponent,
    DepartmentManagementComponent,
    UserModalComponent,
    DepartmentModalComponent,
    PositionManagementComponent,
    PositionModalComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    ToastrModule.forRoot(), // ToastrModule added
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class SystemModule { }
