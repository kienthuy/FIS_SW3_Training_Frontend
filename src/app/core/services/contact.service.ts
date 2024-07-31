import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../model/base-response.model';
import { Contact } from '../model/contact.modal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendContactRequest(payload: Contact): Observable<BaseResponse> {
    return this.http.post<BaseResponse>(
      `${environment.PortalService}/contact/send`, payload
    );
  }
}
