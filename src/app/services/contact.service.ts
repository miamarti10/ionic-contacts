import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ContactInfo} from 'src/app/contactInfo';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _url:string ='http://localhost:3000/contacts'

constructor(private http:HttpClient) { }

getContact(): Observable<ContactInfo[]>{
  return this.http.get<ContactInfo[]>(this._url);
}

}
