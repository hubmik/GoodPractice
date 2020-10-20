import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberCollectionsComponent } from './number-collections.component';

describe('NumberCollectionsComponent', () => {
  let component: NumberCollectionsComponent;
  let fixture: ComponentFixture<NumberCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberCollectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
