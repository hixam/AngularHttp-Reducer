import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class InterviewService {

  constructor(private http: Http) {}

  AddInterview() {
   return this.http.get('http://services.groupkt.com/country/get/iso2code/MA').map(
     (response: Response) => {
       const data = response.json();
       return data;
     }
   )
     .catch(
       (error: Response) => {
         return Observable.throw('error al realizar la peticion al servidor');
       }
     );
  }
}
