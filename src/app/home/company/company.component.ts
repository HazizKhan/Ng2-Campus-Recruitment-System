import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  gjobs;
  uid;
  constructor(private af: AngularFire, private as: AuthService) {
    this.gjobs = this.af.database.list('/jobs');
    this.uid = this.as.getUID();
  }

  ngOnInit() {
  }
  onDelete(x){
    this.gjobs.remove(x);

  }
}
