import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ExperienceComponent } from './experience/experience.component';
import { DummyComponent } from './dummy/dummy.component';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ExperienceComponent,
    DummyComponent
  ],
  imports: [
	BrowserModule,
	HttpClientModule,
	AppRoutingModule,
	AppRoutingModule,
	FormsModule
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
