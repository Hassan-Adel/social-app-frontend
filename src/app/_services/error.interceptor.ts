import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                if(error instanceof HttpErrorResponse) {
                    const applicationError = error.headers.get('Application-Error');
                    if(applicationError){
                        console.error(applicationError);
                        return throwError(applicationError);
                    }
                }
            })
        );
    }


}
// what we're effectively doing here is adding an additional HTTP interceptor to angular's array 
// of HTTP interceptors and this is our own custom one.
// set multi to true because we don't want this to replace our existing interceptors.
// We want this to be added to our array of already existing interceptors.
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
