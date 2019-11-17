import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReportsExpandedComponent} from './reports-expanded.component';

describe('ReportsExpandedComponent', () => {
  let component: ReportsExpandedComponent;
  let fixture: ComponentFixture<ReportsExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportsExpandedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
