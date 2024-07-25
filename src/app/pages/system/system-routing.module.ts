import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { DepartmentManagementComponent } from './department-management/department-management.component';
import { PositionManagementComponent } from './position-management/position-management.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user-management',
        component: UserManagementComponent,
      },
      {
        path: 'department-management',
        component: DepartmentManagementComponent,
      },
      {
        path: 'position-management',
        component: PositionManagementComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
