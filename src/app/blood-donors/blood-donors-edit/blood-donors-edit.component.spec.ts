import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonorsEditComponent } from './blood-donors-edit.component';

describe('BloodDonorsEditComponent', () => {
  let component: BloodDonorsEditComponent;
  let fixture: ComponentFixture<BloodDonorsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodDonorsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodDonorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
