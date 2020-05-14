import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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

  constructor(private activatedRoute:ActivatedRoute,private courseService:CourseService
  ,private route:Router) { }

  id:number;
  mycourse:Course;
 // course:Observable<Course>

 /* ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      param =>{
        this.id=+param.get('id');
      }
    );
    this.course=this.courseService.getCourse(this.id);
  }

  */
 ngOnInit(): void {
   this.activatedRoute.data.subscribe(
     data => this.mycourse = data['course']
   );
 }


  public gotToEdit(){
    this.route.navigate(['edit'],{relativeTo:this.activatedRoute});
  }

}
