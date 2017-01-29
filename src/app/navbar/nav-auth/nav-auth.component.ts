import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-auth',
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.css']
})
export class NavAuthComponent implements OnInit {
  at;
  constructor(private as: AuthService, private af: AngularFire, private router: Router) {
  }

  ngOnInit() {
    this.at = this.as.getAccountType();

  }
  onLogOut(){
    this.af.auth.logout();
    this.as.updateUID(null);
    this.as.setAccountType('');
    this.router.navigate(['/login'])

  }
}
