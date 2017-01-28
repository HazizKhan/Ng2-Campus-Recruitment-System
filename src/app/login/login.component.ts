import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFire} from "angularfire2";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  button = true;

  constructor(private router:Router, private af: AngularFire, private authService: AuthService) { }

  ngOnInit() {
  }
  onNavigateRegister(){
    this.router.navigate(['/register']);
  }
  onLogin(x){
    this.button = false;
    this.af.auth.login(x).then((data)=>{ //login
      alert('logged in');
      console.log(data)
      this.authService.onLogin();
    }).catch((err)=>{ //login
      this.button = true;
      alert(err);
    })
  }
}
