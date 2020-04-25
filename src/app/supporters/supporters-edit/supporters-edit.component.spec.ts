import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportersEditComponent } from './supporters-edit.component';

describe('SupportersEditComponent', () => {
  let component: SupportersEditComponent;
  let fixture: ComponentFixture<SupportersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
