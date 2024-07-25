import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../model/base-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  search(): Observable<BaseResponse>{
    return this.http.get<BaseResponse>(
      `https://script.google.com/macros/s/AKfycbw5LtGtNX_-XxbrEwxpcfKRLLTIQ7GZqlGijcbg7MZPbwFBZO2REdYl38kkbwROMiY/exec`
    );
  }
}
