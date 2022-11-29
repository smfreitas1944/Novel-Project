import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCharactersComponent } from './update-characters.component';

describe('UpdateCharactersComponent', () => {
  let component: UpdateCharactersComponent;
  let fixture: ComponentFixture<UpdateCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCharactersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
