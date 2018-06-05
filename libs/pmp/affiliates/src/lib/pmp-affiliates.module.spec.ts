import { async, TestBed } from '@angular/core/testing';
import { PmpAffiliatesModule } from './pmp-affiliates.module';

describe('PmpAffiliatesModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [PmpAffiliatesModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(PmpAffiliatesModule).toBeDefined();
  });
});
