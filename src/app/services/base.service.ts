import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  public baseUrl = 'http://localhost:3000';

  constructor(public http: HttpClient) {}

  getReq(url: string) {
    return this.http.get<any>(this.baseUrlUpdate(url));
  }

  postReq(url: string, data: any) {
    return this.http.post<any>(this.baseUrlUpdate(url), data);
  }

  putReq(url: string, data: any) {
    return this.http.put<any>(this.baseUrlUpdate(url), data);
  }

  baseUrlUpdate(url: string): string {
    return url.startsWith('/') ? this.baseUrl + url : url;
  }
}
