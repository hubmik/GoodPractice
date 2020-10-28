import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearFunctionComponent } from './linear-function.component';

describe('LinearFunctionComponent', () => {
  let component: LinearFunctionComponent;
  let fixture: ComponentFixture<LinearFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinearFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
