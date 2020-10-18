import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CenterComponent } from './components/user/center/center.component';
import { ContactComponent } from './components/user/contact/contact.component';
import { NotebookComponent } from './components/user/notebook/notebook.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LogedinGuard } from './shared/guards/logedin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'home' }, canActivate: [LogedinGuard] },
  { path: 'login', component: LoginComponent, data: { animation: 'login' }, canActivate: [LogedinGuard] },
  { path: 'sign-in', component: SignInComponent, data: { animation: 'sign-in' }, canActivate: [LogedinGuard] },
  {
    path: 'user', canActivate: [AuthGuard],
    children: [
      {
        path: '', component: UserComponent, data: { animation: 'user' },
      },
      {
        path: 'contact', component: ContactComponent, data: { animation: 'contact' },
      },
      {
        path: 'center', component: CenterComponent, data: { animation: 'center' },
      },
      {
        path: 'notebook', component: NotebookComponent, data: { animation: 'notebook' },
      }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
