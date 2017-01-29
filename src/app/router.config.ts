import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {PostJobComponent} from "./home/company/post-job/post-job.component";
import {ResumeComponent} from "./home/student/resume/resume.component";
/**
 * Created by devilu on 1/28/17.
 */
export const routes : Routes = [
  {path: '', component : LoginComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'postjob', component: PostJobComponent},
  {path: 'resume', component:ResumeComponent}
]
