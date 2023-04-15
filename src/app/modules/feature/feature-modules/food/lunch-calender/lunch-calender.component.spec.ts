import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchCalenderComponent } from './lunch-calender.component';

describe('LunchCalenderComponent', () => {
  let component: LunchCalenderComponent;
  let fixture: ComponentFixture<LunchCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunchCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
