import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../service/course.service';
import {Observable} from 'rxjs';
import {Course} from '../model/course.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private courseService:CourseService) { }

  id:number;
  course:Observable<Course>

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      param =>{
        this.id=+param.get('id');
      }
    );
    this.course=this.courseService.courses
      .pipe(
        map(courses => courses.find(course => course.id === this.id))
      )
  }

}
