import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Course} from '../model/course.model';
import {HttpClient} from '@angular/common/http';
import {map, share, shareReplay, tap} from 'rxjs/operators';


@Injectable()
export class CourseService {

  private subject:BehaviorSubject<Course[]>=new BehaviorSubject<Course[]>([]);

  courses:Observable<Course[]>=this.subject.asObservable();

  constructor(private http:HttpClient) {
    this.loadAllCourses()
      .pipe(
        tap(courses => this.subject.next(courses))
      )
      .subscribe();
  }

  private loadAllCourses() :Observable<Course[]>{
    return this.http.get<Course[]>('http://localhost:8080/api/courses')
      .pipe(
        shareReplay()
      )
  }

  public filterByCategory(category:string):Observable<Course[]>{
    return this.courses.pipe(
      map(courses => courses.filter(course => course.category == category))
    )
  }
  getCourse(id:number):Observable<Course>{
    return this.courses.pipe(
      map(courses => courses.find(course => course.id === id))
    );
  }
}
