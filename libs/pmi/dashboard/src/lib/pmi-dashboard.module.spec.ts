import { async, TestBed } from '@angular/core/testing';
import { PmiDashboardModule } from './pmi-dashboard.module';

describe('PmiDashboardModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [PmiDashboardModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(PmiDashboardModule).toBeDefined();
  });
});
