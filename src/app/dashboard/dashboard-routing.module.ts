import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { UsersComponent } from "./pages/users/users.component";
import { UserDetailComponent } from "./pages/users/pages/user-detail/user-detail.component";
import { CoursesComponent } from "./pages/courses/courses.component";
import { ProductsComponent } from "./pages/products/products.component";



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
        //! Cambiar por categories
        path: 'products',
        component: ProductsComponent
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
