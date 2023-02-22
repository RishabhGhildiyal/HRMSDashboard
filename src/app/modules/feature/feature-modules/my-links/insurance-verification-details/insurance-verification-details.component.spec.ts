import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceVerificationDetailsComponent } from './insurance-verification-details.component';

describe('InsuranceVerificationDetailsComponent', () => {
  let component: InsuranceVerificationDetailsComponent;
  let fixture: ComponentFixture<InsuranceVerificationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceVerificationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceVerificationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
