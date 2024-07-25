import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Kiểm tra nếu URL chứa 'https://script.google.com' -> Bắt buộc nếu không sẽ bị cors do chính sách google
    if (req.url.includes('https://script.google.com')) {
      const modifiedReq = req.clone({
        setHeaders: {
          'Content-Type': 'text/plain'
        }
      });
      return next.handle(modifiedReq);
    }
    return next.handle(req);
  }
}
