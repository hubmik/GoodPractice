import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSetsComponent } from './number-sets.component';

describe('NumberSetsComponent', () => {
  let component: NumberSetsComponent;
  let fixture: ComponentFixture<NumberSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberSetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
