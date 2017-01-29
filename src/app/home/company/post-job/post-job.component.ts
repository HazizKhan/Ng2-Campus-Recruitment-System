import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  button = true;
  cid;
  constructor(private authService: AuthService, private router: Router, private af: AngularFire) {
    this.cid = this.authService.getUID();
  }

  ngOnInit() {
  }
  onPostJob(x){
    console.log(x);
    this.button = false;
    if(this.authService.getUID()){
      console.log(x);
      this.af.database.list("/jobs").push(x).then(()=>{
        this.router.navigate(['/home'])
      }).catch((err) => {alert(err)});
    }
    else{
      this.router.navigate(['/login'])
    }
  }
}
