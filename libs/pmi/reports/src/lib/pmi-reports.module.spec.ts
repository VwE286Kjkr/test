import { async, TestBed } from '@angular/core/testing';
import { PmiReportsModule } from './pmi-reports.module';

describe('PmiReportsModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [PmiReportsModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(PmiReportsModule).toBeDefined();
  });
});
