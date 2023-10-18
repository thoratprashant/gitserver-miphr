import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { NgChartsModule } from 'ng2-charts';
import { AdminRoutes } from './admin.routing';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OrganizationManagementComponent } from './organization-management/organization-management.component';
import { ViewUserDataComponent } from './view-user-data/view-user-data.component';
import { InviteNewOrganizationComponent } from './organization-management/invite-new-organization/invite-new-organization.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ViewEmployeeDetailsComponent } from './organization-management/view-employee-details/view-employee-details.component';



@NgModule({
  declarations: [
    MyProfileComponent,
    OrganizationManagementComponent,
    ViewUserDataComponent,
    InviteNewOrganizationComponent,
    ViewEmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatChipsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatProgressBarModule,
    NgChartsModule,
    SharedModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
