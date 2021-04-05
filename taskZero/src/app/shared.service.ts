import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private signUpData:any;
  
  private students = [];

  AddSignUpData(signUpData:any):void
  {
    this.signUpData = signUpData;
  }
  getSignUpData():any{
    return this.signUpData;
  }

}
