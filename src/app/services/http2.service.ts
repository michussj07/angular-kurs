import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Http2Service {

  constructor(private http: HttpClient) { }
}

/* getTasks(){
  this.http.get('');

} */
