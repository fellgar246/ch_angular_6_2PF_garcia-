import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { CoursesComponent } from "./pages/courses/courses.component";
import { CategoriesComponent } from "./pages/categories/categories.component";



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'users',
        loadChildren: () => import('./pages/users/users.module').then((module) => module.UsersModule)
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class DashboardRoutingModule {}
