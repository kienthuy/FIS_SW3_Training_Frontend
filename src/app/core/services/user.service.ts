import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../model/base-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  search(payload:any): Observable<BaseResponse>{
    return this.http.post<BaseResponse>(
      `http://localhost:8021/api/portal/user/search`, payload
    );
  }

  create(payload:any): Observable<BaseResponse>{
    return this.http.post<BaseResponse>(
      `http://localhost:8021/api/portal/user/create`, payload
    );
  }

  update(payload:any): Observable<BaseResponse>{
    return this.http.post<BaseResponse>(
      `http://localhost:8021/api/portal/user/update`, payload
    );
  }

}
