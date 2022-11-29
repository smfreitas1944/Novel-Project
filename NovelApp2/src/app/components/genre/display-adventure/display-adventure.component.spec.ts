import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAdventureComponent } from './display-adventure.component';

describe('DisplayAdventureComponent', () => {
  let component: DisplayAdventureComponent;
  let fixture: ComponentFixture<DisplayAdventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAdventureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
