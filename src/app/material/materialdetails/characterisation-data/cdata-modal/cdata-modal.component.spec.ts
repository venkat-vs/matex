import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CdataModalComponent} from './cdata-modal.component';

describe('CdataModalComponent', () => {
  let component: CdataModalComponent;
  let fixture: ComponentFixture<CdataModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CdataModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
