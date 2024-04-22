import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, filter, throwError } from 'rxjs';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      filter(event => event instanceof HttpResponse),
      catchError(err => {
        console.log('this is err', err);
        if (err instanceof HttpErrorResponse) {
          const msg = err.message ?? 'Something went wrong, failed to send Http request'
          this.handleError(err);
        }
        return throwError(() => err)
      })
    )
  }

  private handleError(err: HttpErrorResponse): void {
    console.log('handle err', err);
    alert(err.message);
  }
}

export const httpErrorInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
];
