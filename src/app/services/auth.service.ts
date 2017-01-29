import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class AuthService{
  accountType;
  uid = null;
  constructor() {
  }

  getUID(){
    return this.uid;
  }
  updateUID(id){
    this.uid = id;
  }
  getAccountType(){
    return this.accountType;
  }
  setAccountType(t){
    this.accountType = t;
  }
}
