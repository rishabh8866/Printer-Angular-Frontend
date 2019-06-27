import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanToFtpComponent } from './scan-to-ftp.component';

describe('ScanToFtpComponent', () => {
  let component: ScanToFtpComponent;
  let fixture: ComponentFixture<ScanToFtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanToFtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanToFtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
