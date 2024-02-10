import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { District } from '../model/district';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  private apiUrl:string=environment.baseUrl+"district"

  constructor(private http:HttpClient) { }


  add(body:any) {
    return this.http.post(this.apiUrl,body)

  }

  getAll():Observable<District[]>{
    return this.http.get<District[]>(this.apiUrl)
  }

  get(districtId:any){
    const url=`${this.apiUrl}/${districtId}`
    return this.http.get(url)
  }


  update(body:any,districtId:District){
    const url=`${this.apiUrl}/${districtId}`
    return this.http.put(url,body)
  }
  getByRegion(regionId:number){
    const url=`${this.apiUrl+'/byRegion'}/${regionId}`
    return this.http.get(url).pipe();
  }
 
}
