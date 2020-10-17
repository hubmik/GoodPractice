import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaturaComponent } from './matura.component';

describe('MaturaComponent', () => {
  let component: MaturaComponent;
  let fixture: ComponentFixture<MaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
