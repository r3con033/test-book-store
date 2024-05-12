import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import {IHttpOption} from "../interfaces/http";

import {Config} from "../configs/project-config";

@Injectable({
  providedIn: 'root'
})
export class WebApiService<T, B> {

  constructor(public http: HttpClient) {
  }

  get(route: string, options: IHttpOption = {}): Observable<T> {
    return this.http.get<T>(this.buildUrl(route), options);
  }

  post<B>(route: string, body: B, options: IHttpOption = {}): Observable<T> {
    return this.http.post<T>(this.buildUrl(route), body, options);
  }

  put<B>(route: string, body: B, options: IHttpOption = {}): Observable<T> {
    return this.http.put<T>(this.buildUrl(route), body, options);
  }

  patch(route: string, body: B, options: IHttpOption = {}): Observable<T> {
    return this.http.patch<T>(this.buildUrl(route), body, options);
  }

  delete(route: string, options: IHttpOption = {}): Observable<T> {
    return this.http.delete<T>(this.buildUrl(route), options);
  }

  protected buildUrl(route: string): string {
    return `${Config.apiUrl}/${route}`;
  }
}
