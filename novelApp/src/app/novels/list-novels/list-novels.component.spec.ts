import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNovelsComponent } from './list-novels.component';

describe('ListNovelsComponent', () => {
  let component: ListNovelsComponent;
  let fixture: ComponentFixture<ListNovelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNovelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNovelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
