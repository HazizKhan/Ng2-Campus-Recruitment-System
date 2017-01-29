import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  gjobs;
  ajobs;
  sid;
  constructor(private af: AngularFire, private as: AuthService, private router: Router) {
    this.gjobs = this.af.database.list('/jobs');
    this.ajobs = this.af.database.list('/applied');
    this.sid = this.as.getUID();
  }
  ngOnInit() {
  }
  onApply(x){

    this.ajobs.push(x).then(()=>{
    })
      .catch((err)=>{
      alert(err)
      });
    console.log(x);
  }
  onDelete(x){
    this.ajobs.remove(x);
  }
}
