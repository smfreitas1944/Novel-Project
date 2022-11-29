import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRomanceComponent } from './display-romance.component';

describe('DisplayRomanceComponent', () => {
  let component: DisplayRomanceComponent;
  let fixture: ComponentFixture<DisplayRomanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayRomanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayRomanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
