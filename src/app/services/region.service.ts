import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Region } from '../model/region';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private apiUrl:string=environment.baseUrl+"region"

  constructor(private http:HttpClient) { }


  add(body:any) {
    return this.http.post(this.apiUrl,body)

  }

  getAll():Observable<Region[]>{
    return this.http.get<Region[]>(this.apiUrl)
  }

  
  getById(regionId:any){
    const url=`${this.apiUrl}/${regionId}`
    return this.http.get(url)

  }

  update(region:any,regionId:any){
    const url=`${this.apiUrl}/${regionId}`
    return this.http.put(url,region)
  }}
