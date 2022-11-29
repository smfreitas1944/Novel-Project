import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDramaComponent } from './display-drama.component';

describe('DisplayDramaComponent', () => {
  let component: DisplayDramaComponent;
  let fixture: ComponentFixture<DisplayDramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
