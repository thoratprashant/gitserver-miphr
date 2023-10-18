import { Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OrganizationManagementComponent } from './organization-management/organization-management.component';
import { ViewUserDataComponent } from './view-user-data/view-user-data.component';
import { ViewEmployeeDetailsComponent } from './organization-management/view-employee-details/view-employee-details.component';

export const AdminRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "my-profile",
        component: MyProfileComponent,
      },
      {
        path: "organization-management",
        component: OrganizationManagementComponent,
      },
      {
        path: "view-user-data",
        component: ViewUserDataComponent,
      },
      {
        path: "view-employee-details",
        component: ViewEmployeeDetailsComponent,
      },
    ]
  }
];