import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class InterviewService {

  constructor(private http: Http) {}

  AddInterview() {
    // const headers = new Headers({'Content-Type': 'application/json'});
    // const headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    // const options = new RequestOptions({ headers: headers });


//     {headers: headers}
  //  this.http.head('Access-Control-Allow-Origin', '*');
    return this.http.get('https://httpbin.org/get?name=test+value+for+name').map(
     (response: Response) => {
//       response.headers.set('Access-Control-Allow-Origin', '*');
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
