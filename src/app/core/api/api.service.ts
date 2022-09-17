import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  get(url: string, parameters: any) : Observable<any>
  {
    return this.http.get(environment.apiUrl + url, parameters);
  }

  post(url: string, parameters: any) : Observable<any>
  {
    return this.http.post(environment.apiUrl + url, parameters);
  }

  put(url: string, parameters: any) : Observable<any>
  {
    return this.http.put(environment.apiUrl + url, parameters);
  }

  delete(url: string, parameters: any) : Observable<any>
  {
    return this.http.delete(environment.apiUrl + url, parameters);
  }
}
