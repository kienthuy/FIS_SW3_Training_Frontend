import { Routes } from '@angular/router';

import { AppSideLoginComponent } from './login/login.component';
import { AppSideRegisterComponent } from './register/register.component';
import { SideForgotPwdComponent } from './side-forgot-pwd/side-forgot-pwd.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: AppSideLoginComponent,
      },
      {
        path: 'register',
        component: AppSideRegisterComponent,
      },
      {
        path: 'side-forgot-pwd',
        component: SideForgotPwdComponent,
      },
    ],
  },
];
