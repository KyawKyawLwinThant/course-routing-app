import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import {CourseRoutingModule} from './course-routing-module';
import {CourseService} from './service/course.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CourseResolverService} from './service/course.resolver.service';
import { CourseEditPrimaryComponent } from './course-edit-primary/course-edit-primary.component';
import { CourseEditCompleteComponent } from './course-edit-complete/course-edit-complete.component';



@NgModule({
  declarations: [CourseListComponent, CourseDetailComponent, CourseEditComponent, CourseEditPrimaryComponent, CourseEditCompleteComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    CourseService,
    CourseResolverService
  ]
})
export class CourseModule { }
