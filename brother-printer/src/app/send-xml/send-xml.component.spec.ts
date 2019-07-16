import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendXmlComponent } from './send-xml.component';

describe('SendXmlComponent', () => {
  let component: SendXmlComponent;
  let fixture: ComponentFixture<SendXmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendXmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
