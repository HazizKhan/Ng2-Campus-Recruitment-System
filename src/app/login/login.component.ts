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
  obj;
  constructor(private router:Router, private af: AngularFire, private authService: AuthService) {

  }

  ngOnInit() {
  }
  onNavigateRegister(){
    this.router.navigate(['/register']);
  }
  onLogin(x){
    this.button = false;
    this.af.auth.login(x).then((data)=>{ //login
      this.authService.updateUID(data.uid);
      this.af.database.object(data.uid).subscribe((val)=>{
        this.authService.setAccountType(val.accountType);
        this.router.navigate(['/home']);
      });


      console.log(this.authService.getUID());
    }).catch((err)=>{ //login
      this.button = true;
      alert(err);
    })
  }
}
