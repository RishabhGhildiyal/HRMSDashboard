import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsDialogComponent } from './awards-dialog.component';

describe('AwardsDialogComponent', () => {
  let component: AwardsDialogComponent;
  let fixture: ComponentFixture<AwardsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
