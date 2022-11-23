import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCharacterByNovelComponent } from './view-character-by-novel.component';

describe('ViewCharacterByNovelComponent', () => {
  let component: ViewCharacterByNovelComponent;
  let fixture: ComponentFixture<ViewCharacterByNovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCharacterByNovelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCharacterByNovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
