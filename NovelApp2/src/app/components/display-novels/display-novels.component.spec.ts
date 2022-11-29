import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNovelsComponent } from './display-novels.component';

describe('DisplayNovelsComponent', () => {
  let component: DisplayNovelsComponent;
  let fixture: ComponentFixture<DisplayNovelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayNovelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayNovelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
