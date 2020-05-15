import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Course} from '../model/course.model';

@Component({
  selector: 'app-course-edit-primary',
  templateUrl: './course-edit-primary.component.html',
  styleUrls: ['./course-edit-primary.component.css']
})
export class CourseEditPrimaryComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private fb:FormBuilder) { }

  pageTitle:string='Primary Course Information'

  course:Course;

  courseEditForm:FormGroup;

  ngOnInit(): void {
    this.activatedRoute.parent.data.subscribe(
      data => this.course=data['course']
    );
    this.courseEditForm=this.fb.group(
      {
        url:[this.course?.url],
        category:[this.course?.category],
        price:[this.course?.price]
      }
    )
  }



}
