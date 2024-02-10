import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private apiUrl:string=environment.baseUrl+"staff"

  constructor(private http:HttpClient) { }


  add(body: any) {
    // console.log('Data to be sent:', body);
    return this.http.post(this.apiUrl, body);
  }


}
