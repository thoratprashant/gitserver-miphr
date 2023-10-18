 
import { Routes } from "@angular/router"; 
import { SigninComponent } from "./signin/signin.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
 

export const AuthRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "signin",
        component: SigninComponent, 
      },
      {
        path: "forgot-password",
        component: ForgotPasswordComponent,
      },
      {
        path: "reset-password",
        component: ResetPasswordComponent,
      }, 
    ]
  }
];
