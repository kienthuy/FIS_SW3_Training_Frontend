import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../model/base-response.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  payment(payload: any): Observable<BaseResponse> {
    // Định nghĩa các headers
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain'
    });

    // Gửi yêu cầu POST với headers
    return this.http.post<BaseResponse>(
      `https://script.google.com/macros/s/AKfycbwandLoKCI8EtDdGG_HvMEzBg0btuS_Etw4EgqkAXLOsEtHbySliOISTSrboWtLN-w/exec`,
      payload
    );
  }
}
