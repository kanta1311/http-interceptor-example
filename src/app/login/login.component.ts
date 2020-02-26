import { Component, OnInit } from '@angular/core';
import { AllService } from '../service/all.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username: string = null
  password: string = null
  constructor(private all: AllService) { }

  ngOnInit() { }

  login() {
    const formdata = new FormData();
    formdata.append('username', this.username);
    formdata.append('password', this.password);
    this.all.http.login(formdata).subscribe((res: any) => {
      if (res.error) {
        alert(res.message)
      } else {
        console.log("login Data", res);
        this.all.http.setAuthToken(res.data.token);
        this.all.navCtrl.navigateForward('home');
      }
    })
  }
}
