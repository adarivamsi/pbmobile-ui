import { TestBed } from '@angular/core/testing';
import { PbMobileComponent } from './pb-mobile.component';

describe('PbMobileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PbMobileComponent],
    }).compileComponents();
  });

  it('should create the pb-mobile', () => {
    const fixture = TestBed.createComponent(PbMobileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
