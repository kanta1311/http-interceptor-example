import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AllService } from '../service/all.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private all:AllService){

  }
  canActivate():boolean{
    if(this.all.http.getAuthToken()!=null){
      return true;
    }
    this.all.navCtrl.navigateRoot('login');
    return false
  }
}
