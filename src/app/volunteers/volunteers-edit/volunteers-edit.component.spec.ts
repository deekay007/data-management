import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersEditComponent } from './volunteers-edit.component';

describe('VolunteersEditComponent', () => {
  let component: VolunteersEditComponent;
  let fixture: ComponentFixture<VolunteersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
