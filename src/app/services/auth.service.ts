import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  status = false;
  uid;
  constructor() { }
  getStatus(){
    return status;
  }
  onLogin(){
    this.status = true;
  }
  getUID(){
    return this.uid;
  }
  updateUID(id){
    this.uid = id;
  }
}
