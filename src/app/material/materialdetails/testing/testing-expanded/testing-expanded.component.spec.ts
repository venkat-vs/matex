import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TestingExpandedComponent} from './testing-expanded.component';

describe('TestingExpandedComponent', () => {
  let component: TestingExpandedComponent;
  let fixture: ComponentFixture<TestingExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestingExpandedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
