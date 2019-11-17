import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GalleryExpandedComponent} from './gallery-expanded.component';

describe('GalleryExpandedComponent', () => {
  let component: GalleryExpandedComponent;
  let fixture: ComponentFixture<GalleryExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryExpandedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
