import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { UsersModule } from './pages/users/users.module';
import { CoursesModule } from './pages/courses/courses.module';
import { HomeComponent } from './pages/home/home.component';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProductsModule } from './pages/products/products.module';

@NgModule({
  declarations: [
    DashboardComponent,
    NavMenuComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    SharedModule,
    UsersModule,
    CoursesModule,
    ProductsModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
