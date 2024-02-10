import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StepperService {

  private apiUrl:string=environment.baseUrl+"stepper"

  constructor(private http:HttpClient) { }


  add(body:any) {
    return this.http.post(this.apiUrl,body)

  }

  getAll(){
    return this.http.get(this.apiUrl);
  }

  getById(checkNumber:number){
    const url=`${this.apiUrl}/${checkNumber}`
    return this.http.get(url)

  }
}
