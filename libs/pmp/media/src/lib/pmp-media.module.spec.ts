import { async, TestBed } from '@angular/core/testing';
import { PmpMediaModule } from './pmp-media.module';

describe('PmpMediaModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [PmpMediaModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(PmpMediaModule).toBeDefined();
  });
});
