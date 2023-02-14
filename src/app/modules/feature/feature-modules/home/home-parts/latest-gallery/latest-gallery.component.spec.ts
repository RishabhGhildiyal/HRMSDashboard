import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestGalleryComponent } from './latest-gallery.component';

describe('LatestGalleryComponent', () => {
  let component: LatestGalleryComponent;
  let fixture: ComponentFixture<LatestGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
