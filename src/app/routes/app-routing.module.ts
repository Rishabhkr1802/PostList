import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { EditpostComponent } from '../components/editpost/editpost.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { PostComponent } from '../components/post/post.component';
import { RegisterComponent } from '../components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addPost', component: PostComponent },
  { path: 'editPost/:id', component: EditpostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
