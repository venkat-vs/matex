import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TestingModalComponent} from './testing-modal.component';

describe('TestingModalComponent', () => {
  let component: TestingModalComponent;
  let fixture: ComponentFixture<TestingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestingModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
