import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavUnauthComponent } from './navbar/nav-unauth/nav-unauth.component';
import { NavAuthComponent } from './navbar/nav-auth/nav-auth.component';
import {AngularFire, AngularFireModule, AuthMethods, AuthProviders} from "angularfire2";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import {routes} from "./router.config";
import {AuthService} from "./services/auth.service";
import { CompanyComponent } from './company/company.component';
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
    NavbarComponent,
    NavUnauthComponent,
    NavAuthComponent,
    RegisterComponent,
    LoginComponent,
    CompanyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
