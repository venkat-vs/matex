import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterisationDataComponent} from './characterisation-data.component';

describe('CharacterisationDataComponent', () => {
  let component: CharacterisationDataComponent;
  let fixture: ComponentFixture<CharacterisationDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterisationDataComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterisationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
