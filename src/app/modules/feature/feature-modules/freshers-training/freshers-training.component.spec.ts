import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshersTrainingComponent } from './freshers-training.component';

describe('FreshersTrainingComponent', () => {
  let component: FreshersTrainingComponent;
  let fixture: ComponentFixture<FreshersTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshersTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshersTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
