import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http';
import { AllService } from './all.service';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private all: AllService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.all.http.getAuthToken();
    let newHeaders = req.headers;
    if (token) {
      newHeaders = newHeaders.append('token', token);
    }
    const authReq = req.clone({ headers: newHeaders });
    return next.handle(authReq).pipe(data => {
      data.subscribe((res: any) => {
        console.log(res)

        if(res.body){
          if (res.body.code == 401) {
            this.loginPage();
          }
        }
        
      }, (error: HttpErrorResponse) => {
        if (error.status == 401) {
          this.loginPage();
        }
      })
      return data
    })
  }

  loginPage() {
    alert("Token Expire")
    this.all.navCtrl.navigateRoot('login');
    localStorage.clear();
  }
}