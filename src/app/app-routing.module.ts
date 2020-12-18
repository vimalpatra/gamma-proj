import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ExperienceComponent } from './experience/experience.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
	{ path: '', pathMatch: 'full', component: SignupComponent },
	{ path: 'signup', redirectTo: '' },
	{ path: 'login', component: LoginComponent },
	{ path: 'dashboard', canActivate: [AuthGuard], component: ExperienceComponent },
	{ path: 'dummy', component: DummyComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
