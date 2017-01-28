import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  nav;
  constructor(private authService: AuthService) {
    this.nav = this.authService.getStatus();
  }

  ngOnInit() {
  }

}
