import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import { NavUnauthComponent } from './navbar/nav-unauth/nav-unauth.component';
import { NavAuthComponent } from './navbar/nav-auth/nav-auth.component';
import {AngularFire, AngularFireModule, AuthMethods, AuthProviders} from "angularfire2";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import {routes} from "./router.config";
import {AuthService} from "./services/auth.service";
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './home/company/company.component';
import { StudentComponent } from './home/student/student.component';
import { PostJobComponent } from './home/company/post-job/post-job.component';
import { ResumeComponent } from './home/student/resume/resume.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { CreateComponent } from './home/student/resume/create/create.component';
import { UpdateComponent } from './home/student/resume/update/update.component';
import { AdminComponent } from './home/admin/admin.component';
const firebaseConfig = {
  apiKey: "AIzaSyCpAQ53bHwjeZ-lhtxdCNx7dNwULip5-z0",
  authDomain: "ng2-crs.firebaseapp.com",
  databaseURL: "https://ng2-crs.firebaseio.com",
  storageBucket: "ng2-crs.appspot.com",
  messagingSenderId: "690968980658"
};
const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};


@NgModule({
  declarations: [
    AppComponent,
    NavUnauthComponent,
    NavAuthComponent,
    RegisterComponent,
    LoginComponent,
    CompanyComponent,
    HomeComponent,
    CompanyComponent,
    StudentComponent,
    PostJobComponent,
    ResumeComponent,
    CreateComponent,
    UpdateComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
