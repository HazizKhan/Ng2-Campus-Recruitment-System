import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {StudentService} from "../../../services/student.service";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  providers: [StudentService]
})
export class ResumeComponent implements OnInit {
  button = true;
  resume;
  resumeForm: FormGroup;
  constructor(private as: AuthService, private router: Router, private ss: StudentService, fb: FormBuilder) {
    this.resume = this.ss.getResume();
    console.log(this.resume.$value, "null");
  }

  ngOnInit() {
    if(!this.as.getUID()){
      this.router.navigate(['/login']);
    }
  }


}
