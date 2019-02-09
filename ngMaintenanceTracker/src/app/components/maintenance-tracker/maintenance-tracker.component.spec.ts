import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceTrackerComponent } from './maintenance-tracker.component';

describe('MaintenanceTrackerComponent', () => {
  let component: MaintenanceTrackerComponent;
  let fixture: ComponentFixture<MaintenanceTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
