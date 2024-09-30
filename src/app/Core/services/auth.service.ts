import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../Enviroment/enviroment.local';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  private readonly _Router = inject(Router)

  register = (user:any):Observable<any> => {
   return this._HttpClient.post(baseUrl + `users/signup`, user)
  }

  saveUserData = () => {
    let token = localStorage.getItem('token')
    if (token) {
     try {
      let decoded = jwtDecode(token)
     console.log(decoded)
     } catch (error) {
      this._Router.navigate(['login'])
      localStorage.clear()
     }
    }
  }
}
