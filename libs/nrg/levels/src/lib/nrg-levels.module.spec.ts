import { async, TestBed } from '@angular/core/testing';
import { NrgLevelsModule } from './nrg-levels.module';

describe('NrgLevelsModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [NrgLevelsModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(NrgLevelsModule).toBeDefined();
  });
});
