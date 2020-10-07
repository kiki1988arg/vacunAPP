import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LogedinGuard } from './shared/guards/logedin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'home' }, canActivate: [LogedinGuard] },
  { path: 'sign-in', component: SignInComponent, data: { animation: 'sign-in' }, canActivate: [LogedinGuard] },
  { path: 'help', component: HelpComponent, data: { animation: 'help' }, canActivate: [LogedinGuard] },
  { path: 'user', component: UserComponent, data: { animation: 'user' }, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
