import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayScifiComponent } from './display-scifi.component';

describe('DisplayScifiComponent', () => {
  let component: DisplayScifiComponent;
  let fixture: ComponentFixture<DisplayScifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayScifiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayScifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
