import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'localhost:4200';

  constructor(private http: HttpClient) {  }

  getRequest(url = this.baseUrl, endpoint) {
    return this.http.get(url + endpoint);
  }

  getRequestWithParam(url = this.baseUrl, params, endpoint: string) {
    return this.http.get(url + endpoint, params);
  }

  sendRequestWithData <T>(url = this.baseUrl, payload, endpoint: string): Observable<T> | any {
    const data = { ...payload };
    return this.http.post(url + endpoint, data);
  }
}
