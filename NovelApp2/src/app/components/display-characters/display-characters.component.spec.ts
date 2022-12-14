import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCharactersComponent } from './display-characters.component';

describe('DisplayCharactersComponent', () => {
  let component: DisplayCharactersComponent;
  let fixture: ComponentFixture<DisplayCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCharactersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
