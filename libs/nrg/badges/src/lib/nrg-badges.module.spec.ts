import { async, TestBed } from '@angular/core/testing';
import { NrgBadgesModule } from './nrg-badges.module';

describe('NrgBadgesModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [NrgBadgesModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(NrgBadgesModule).toBeDefined();
  });
});
