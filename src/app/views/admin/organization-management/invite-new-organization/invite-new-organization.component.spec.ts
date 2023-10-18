import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteNewOrganizationComponent } from './invite-new-organization.component';

describe('InviteNewOrganizationComponent', () => {
  let component: InviteNewOrganizationComponent;
  let fixture: ComponentFixture<InviteNewOrganizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InviteNewOrganizationComponent]
    });
    fixture = TestBed.createComponent(InviteNewOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
