import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from '../model/section';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private apiUrl:string=environment.baseUrl+'section';


  constructor(private http:HttpClient) { }

  add(body:Section){
    return this.http.post(this.apiUrl,body)
  }

  getAll():Observable<Section>{
    return this.http.get<Section>(this.apiUrl);
  }

  getById(sectionId: number):Observable<Section> {
    const url = `${this.apiUrl}/${sectionId}`;
    return this.http.get<Section>(url);
  }

  update(body:Section,sectionId:number){
    const url=`${this.apiUrl}/${sectionId}`
    return this.http.put(url,body)
  }
}
