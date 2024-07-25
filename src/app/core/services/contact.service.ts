import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../model/base-response.model';
import { Contact } from '../model/contact.modal';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  sendBookingRequest(bookingData: { fullName: string; email: string; phone: string; appointmentTime: string; selectedProvince: string; selectedDistrict: string; selectedBranch: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  sendContactRequest(payload: Contact): Observable<BaseResponse> {
    return this.http.post<BaseResponse>(
      'http://localhost:8021/api/portal/contact/send', payload
    );
  }
}
