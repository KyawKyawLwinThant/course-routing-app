import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {CourseEditComponent} from './course-edit/course-edit.component';
import {CourseResolverService} from './service/course.resolver.service';


const routes:Routes=[
  {path:'',component:CourseListComponent},
  {
    path:':id',component: CourseDetailComponent,
    resolve:{course:CourseResolverService}
  },
  {
    path:':id/edit',component: CourseEditComponent,
    resolve: {course: CourseResolverService}
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class CourseRoutingModule {

}
