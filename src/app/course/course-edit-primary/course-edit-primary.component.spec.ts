import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditPrimaryComponent } from './course-edit-primary.component';

describe('CourseEditPrimaryComponent', () => {
  let component: CourseEditPrimaryComponent;
  let fixture: ComponentFixture<CourseEditPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEditPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
