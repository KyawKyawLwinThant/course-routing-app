import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [

  {path:'welcome',component:HomeComponent},
  {path:'courses',
    loadChildren:() => import('./course/course.module').then(m => m.CourseModule)
  },
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
