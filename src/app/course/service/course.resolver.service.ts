import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Course} from '../model/course.model';
import {Observable} from 'rxjs';
import {CourseService} from './course.service';
import {take} from 'rxjs/operators';


@Injectable()
export class CourseResolverService implements Resolve<Course>{

  constructor(private courseService:CourseService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    let id=route.paramMap.get('id');
    const course=this.courseService.getCourse(+id);
    return course.pipe(
      take(1)
    );
  }



}
