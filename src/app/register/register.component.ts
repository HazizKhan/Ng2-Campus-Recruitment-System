import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFire} from "angularfire2";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  accountType = "Account Type";
  button = true;
  constructor(private router: Router, private af: AngularFire, private authService: AuthService) { }

  ngOnInit() {
  }
  onSelect(type){
    this.accountType = type;
  }
  onRegister(x){
    if(this.accountType != "Account Type"){
      this.button = false;
      this.af.auth.createUser(x).then(()=>{ // register

        this.af.auth.login(x).then((data)=>{ //login
          // console.log(data);
          this.af.database.object(data.uid).set({
            accountType: this.accountType,
            uid: data.uid
          });
          this.authService.updateUID(data.uid);
          this.authService.onLogin();
        }).catch((err)=>{ //login
          alert('Your account is created\n'+ err+'\n Try to login');
          })
      })
        .catch((err)=>{ //register
          alert(err);
          this.button = true;
        })

    }

    else {
      this.button = true;

      alert("Please Select Account Type");
    }
  }
  onNavigateLogin(){
    this.router.navigate(['/login']);
  }
}
