import { Injectable } from '@angular/core';
import { HttpService } from './http';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(public http:HttpService,public navCtrl:NavController) { }
}
