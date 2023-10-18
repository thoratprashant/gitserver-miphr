import { Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
export interface PeriodicElement {
  orgName: string;
  adminEmail: string;
  status: string;
  invited: string;
  joined: string;
  numberEmployees: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { orgName: 'Organization 1', adminEmail: 'admin@org1.com', status: 'Active', invited: '7/31/2023', joined: '8/14/2023', numberEmployees:'57', action:'' },
  { orgName: 'Organization 2', adminEmail: 'admin@org2.com', status: 'Active', invited: '7/31/2023', joined: '8/14/2023', numberEmployees:'57', action:'' },
  { orgName: 'Organization 3', adminEmail: 'admin@org3.com', status: 'Active', invited: '7/31/2023', joined: '8/14/2023', numberEmployees:'57', action:'' },
  { orgName: 'Organization 4', adminEmail: 'admin@org4.com', status: 'Active', invited: '7/31/2023', joined: '8/14/2023', numberEmployees:'57', action:'' },
  { orgName: 'Organization 5', adminEmail: 'admin@org5.com', status: 'Active', invited: '7/31/2023', joined: '8/14/2023', numberEmployees:'57', action:'' },
]
@Component({
  selector: 'app-organization-management',
  templateUrl: './organization-management.component.html',
  styleUrls: ['./organization-management.component.scss']
})
export class OrganizationManagementComponent {
  displayedColumns: string[] = ['orgName', 'adminEmail', 'status', 'invited', 'joined', 'numberEmployees', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    
  }
}
