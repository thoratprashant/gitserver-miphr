import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserDataComponent } from './view-user-data.component';

describe('ViewUserDataComponent', () => {
  let component: ViewUserDataComponent;
  let fixture: ComponentFixture<ViewUserDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUserDataComponent]
    });
    fixture = TestBed.createComponent(ViewUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
