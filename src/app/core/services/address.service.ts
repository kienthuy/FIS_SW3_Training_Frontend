import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../model/base-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(
    private http: HttpClient
  ) { }

  getProvince(payload:any): Observable<BaseResponse>{
    return this.http.post<BaseResponse>(
      `${environment.PortalService}/address/getProvince`, payload
    );
  }

  getDistrict(payload:any): Observable<BaseResponse>{
    return this.http.post<BaseResponse>(
      `${environment.PortalService}/address/getDistrict`, payload
    );
  }

  getWard(payload:any): Observable<BaseResponse>{
    return this.http.post<BaseResponse>(
      `${environment.PortalService}/address/getWard`, payload
    );
  }

  getBranch(payload:any): Observable<BaseResponse>{
    return this.http.post<BaseResponse>(
      `${environment.PortalService}/address/getBranch`, payload
    );
  }

  getProduct(payload:any): Observable<BaseResponse>{
    return this.http.post<BaseResponse>(
      `${environment.PortalService}/address/getProduct`, payload
    );
  }

}