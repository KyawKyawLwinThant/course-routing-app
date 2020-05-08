import { Component, OnInit } from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {Course} from '../model/course.model';
import {CourseService} from '../service/course.service';
import {FormControl} from '@angular/forms';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses:Observable<Course[]>;
  pageTitle:string='Courses';

  category=new FormControl();

  listFilter:string;

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.courses=this.courseService.courses;


    this.category.valueChanges.subscribe(
      data => this.listFilter=data
    );

    fromEvent(document,'keyup')
      .pipe(

        tap(()=> {
          if(this.listFilter && this.listFilter==='BEGINNER'||this.listFilter==='ADVANCED'){
            this.courses=this.courseService.filterByCategory(this.listFilter);
          }

        })
      )
      .subscribe();
  }

}
