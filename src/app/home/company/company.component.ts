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
  ajobs;
  uid;
  modal = false;
  stuResume = {
    name: false,
    mm:'',
    dd:'',
    yyyy:'',
    exm:'',
    year:'',
    marks:''
  };
  constructor(private af: AngularFire, private as: AuthService) {
    this.gjobs = this.af.database.list('/jobs');
    this.ajobs = this.af.database.list('/applied');
    this.uid = this.as.getUID();
  }

  ngOnInit() {
  }
  onDelete(x){
    this.gjobs.remove(x);

  }
  onRemove(x){
    this.ajobs.remove(x);
  }
  onViewResume(sid, modal){
    this.af.database.object(sid).subscribe((val)=>{
      this.modal = true;
      this.stuResume = val.resume;
      modal.style.display = "block";
    })

  }
  onCloseModal(m){
    this.modal = false;

    m.style.display = "none";
  }
}
