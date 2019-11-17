import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterisationDataExpandedComponent} from './characterisation-data-expanded.component';

describe('CharacterisationDataExpandedComponent', () => {
  let component: CharacterisationDataExpandedComponent;
  let fixture: ComponentFixture<CharacterisationDataExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterisationDataExpandedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterisationDataExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
