import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
/**
 * Created by devilu on 1/28/17.
 */
export const routes : Routes = [
  {path: '', component : LoginComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent}
]
