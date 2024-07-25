import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../model/base-response.model';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(
    private http: HttpClient
  ) { }

  search(payload:any): Observable<BaseResponse>{
    return this.http.post<BaseResponse>(
      `http://localhost:8021/api/portal/position/search`, payload
    );
  }

  create(payload:any): Observable<BaseResponse>{
    return this.http.post<BaseResponse>(
      `http://localhost:8021/api/portal/position/create`, payload
    );
  }

  update(payload:any): Observable<BaseResponse>{
    return this.http.post<BaseResponse>(
      `http://localhost:8021/api/portal/position/update`, payload
    );
  }

}
