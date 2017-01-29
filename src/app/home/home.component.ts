import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  at;
  constructor(private authService: AuthService, private router: Router) {
    this.at = this.authService.getAccountType();
  }

  ngOnInit() {
    console.log(this.authService.getUID());

  }

}
