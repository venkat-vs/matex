import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MaterialdetailsComponent} from './materialdetails.component';

describe('MaterialdetailsComponent', () => {
  let component: MaterialdetailsComponent;
  let fixture: ComponentFixture<MaterialdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialdetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
