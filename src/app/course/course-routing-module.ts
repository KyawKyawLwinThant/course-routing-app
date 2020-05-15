import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {CourseEditComponent} from './course-edit/course-edit.component';
import {CourseResolverService} from './service/course.resolver.service';
import {CourseEditPrimaryComponent} from './course-edit-primary/course-edit-primary.component';
import {CourseEditCompleteComponent} from './course-edit-complete/course-edit-complete.component';


const routes:Routes=[
  {
    path:'',
    children: [
      {path:'',component:CourseListComponent},
      {
        path:':id',component: CourseDetailComponent,
        resolve:{course:CourseResolverService}
      },
      {
        path:':id/edit',component: CourseEditComponent,
        resolve: {course: CourseResolverService},
        children:[
          {
            path:'',redirectTo:'primary',pathMatch:'full'
          },
          {
            path:'primary',component:CourseEditPrimaryComponent
          },
          {
            path:'complete',component:CourseEditCompleteComponent
          }
        ]
      }
    ]
  }


]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class CourseRoutingModule {

}
