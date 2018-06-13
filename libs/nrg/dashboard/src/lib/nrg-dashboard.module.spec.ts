import { async, TestBed } from '@angular/core/testing';
import { NrgDashboardModule } from './nrg-dashboard.module';

describe('NrgDashboardModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [NrgDashboardModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(NrgDashboardModule).toBeDefined();
  });
});
