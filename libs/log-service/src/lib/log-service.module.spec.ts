import { async, TestBed } from '@angular/core/testing';
import { LogServiceModule } from './log-service.module';

describe('LogServiceModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [LogServiceModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(LogServiceModule).toBeDefined();
  });
});
