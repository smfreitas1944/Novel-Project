import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCharactersComponent } from './delete-characters.component';

describe('DeleteCharactersComponent', () => {
  let component: DeleteCharactersComponent;
  let fixture: ComponentFixture<DeleteCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCharactersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
