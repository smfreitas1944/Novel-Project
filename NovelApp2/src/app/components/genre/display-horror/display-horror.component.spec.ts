import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHorrorComponent } from './display-horror.component';

describe('DisplayHorrorComponent', () => {
  let component: DisplayHorrorComponent;
  let fixture: ComponentFixture<DisplayHorrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayHorrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayHorrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
