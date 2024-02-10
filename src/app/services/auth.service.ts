import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl:string=environment.baseUrl+'auth';

  private userPayLoad:any;

  constructor(private http:HttpClient) { 
    this.userPayLoad=this.decodeToken();
  }

  login(logObj:any){
    const url=`${this.apiUrl}/${'authenticate'}`
    return this.http.post(url,logObj)
  }

  register(body:any){
    return this.http.post(this.apiUrl+"/register",body)

  }

  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }
  isLoggedIn():boolean{
    return !!localStorage.getItem('token')
  }

  decodeToken(){
    const jwtHelper=new JwtHelperService;
    const token=this.getToken()!;
    return jwtHelper.decodeToken(token);
  }

  getFullNameFromToken(){
    if(this.userPayLoad)
    return this.userPayLoad.firstname;

  }

  getRoleFromToken(){
    if(this.userPayLoad)
    return this.userPayLoad.role;
  }

  getUser(){
    return this.http.get(this.apiUrl+"/user-count")
  }

  getAll(){
    return this.http.get(this.apiUrl+"/users")
  }
}
