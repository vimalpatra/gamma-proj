import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ExperienceComponent } from './experience/experience.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
	{ path: '', pathMatch: 'full', component: ExperienceComponent },
	{ path: '/signup', component: SignupComponent },
	{ path: '/login', component: LoginComponent },
  ];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
