import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../model/base-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: HttpClient
  ) { }

  search(payload:any): Observable<BaseResponse>{
    return this.http.post<BaseResponse>(
       `${environment.PortalService}/booking/search`, payload
    );
  }

  create(payload:any): Observable<BaseResponse>{
    return this.http.post<BaseResponse>(
      `${environment.PortalService}/booking/create`, payload
    );
  }

  update(payload:any): Observable<BaseResponse>{
    return this.http.post<BaseResponse>(
      `${environment.PortalService}/booking/update`, payload
    );
  }

}
