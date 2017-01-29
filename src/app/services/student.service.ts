import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Injectable()
export class StudentService {
  resume;
  sid;
  constructor(private af: AngularFire, private as:AuthService) {
    this.af.database.object(this.as.getUID()+"/resume").subscribe((val) =>{
      this.resume = val;
      // console.log(this.resume);

    });
    this.sid = this.as.getUID();

  }
  getResume(){
    console.log(this.resume, this.as.getUID());

    return this.resume;
  }
  setResume(x){
    this.af.database.object(this.as.getUID()+'/resume').set(x);
  }
  updateResume(x){
    this.af.database.object(this.as.getUID()+'/resume').update(x);

  }
}
