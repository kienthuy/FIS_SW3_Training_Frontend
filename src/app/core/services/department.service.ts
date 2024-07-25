import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../model/base-response.model';
import { Department } from '../model/department.modal';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(
    private http: HttpClient
  ) { }

  search(payload:any): Observable<BaseResponse>{
    return this.http.post<BaseResponse>(
      `http://localhost:8021/api/portal/department/search`, payload
    );
  }

  create(payload:any): Observable<BaseResponse>{
    return this.http.post<BaseResponse>(
      `http://localhost:8021/api/portal/department/create`, payload
    );
  }

  update(payload:any): Observable<BaseResponse>{
    return this.http.post<BaseResponse>(
      `http://localhost:8021/api/portal/department/update`, payload
    );
  }
}