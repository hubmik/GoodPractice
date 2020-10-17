import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryYourselfComponent } from './try-yourself.component';

describe('TryYourselfComponent', () => {
  let component: TryYourselfComponent;
  let fixture: ComponentFixture<TryYourselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryYourselfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryYourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
