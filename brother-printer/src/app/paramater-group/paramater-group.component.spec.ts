import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamaterGroupComponent } from './paramater-group.component';

describe('ParamaterGroupComponent', () => {
  let component: ParamaterGroupComponent;
  let fixture: ComponentFixture<ParamaterGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamaterGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamaterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
