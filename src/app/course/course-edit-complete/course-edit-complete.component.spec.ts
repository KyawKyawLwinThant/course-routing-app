import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditCompleteComponent } from './course-edit-complete.component';

describe('CourseEditCompleteComponent', () => {
  let component: CourseEditCompleteComponent;
  let fixture: ComponentFixture<CourseEditCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEditCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
