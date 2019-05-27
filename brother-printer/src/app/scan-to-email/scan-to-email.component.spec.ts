import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanToEmailComponent } from './scan-to-email.component';

describe('ScanToEmailComponent', () => {
  let component: ScanToEmailComponent;
  let fixture: ComponentFixture<ScanToEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanToEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanToEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
