import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayTodoComponent } from './today-todo.component';

describe('TodayTodoComponent', () => {
  let component: TodayTodoComponent;
  let fixture: ComponentFixture<TodayTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
