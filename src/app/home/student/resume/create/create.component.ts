import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";
import {StudentService} from "../../../../services/student.service";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  button = true;
  resume;
  resumeForm: FormGroup;
  constructor(private as: AuthService, private router: Router, private ss: StudentService, fb: FormBuilder) {
    this.resume = this.ss.getResume();
    console.log(this.resume)
    this.resumeForm = fb.group({
      'name': [this.resume.name],
      'dd': [this.resume.dd],
      'mm': [this.resume.mm],
      'yyyy': [this.resume.yyyy],
      'exm': [this.resume.exm],
      'marks': [this.resume.marks],
      'year': [this.resume.year],
    })
  }

  ngOnInit() {
    if(!this.as.getUID()){
      this.router.navigate(['/login']);
    }
  }
  onSet(x){
    this.ss.setResume(x);
    this.router.navigate(['/home']);

  }

}
