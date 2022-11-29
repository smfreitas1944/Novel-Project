import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMysteryComponent } from './display-mystery.component';

describe('DisplayMysteryComponent', () => {
  let component: DisplayMysteryComponent;
  let fixture: ComponentFixture<DisplayMysteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMysteryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayMysteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
