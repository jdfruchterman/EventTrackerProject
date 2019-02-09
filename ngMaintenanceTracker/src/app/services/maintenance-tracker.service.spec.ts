import { TestBed } from '@angular/core/testing';

import { MaintenanceTrackerService } from './maintenance-tracker.service';

describe('MaintenanceTrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaintenanceTrackerService = TestBed.get(MaintenanceTrackerService);
    expect(service).toBeTruthy();
  });
});
