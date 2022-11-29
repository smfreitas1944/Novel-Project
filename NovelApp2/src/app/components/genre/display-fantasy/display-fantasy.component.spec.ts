import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFantasyComponent } from './display-fantasy.component';

describe('DisplayFantasyComponent', () => {
  let component: DisplayFantasyComponent;
  let fixture: ComponentFixture<DisplayFantasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFantasyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayFantasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
