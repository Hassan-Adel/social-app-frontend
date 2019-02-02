import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Message } from '../_models/message';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class MessagesResolver implements Resolve<Message[]> {
  pageNumber =1;
  pageSize= 5;
  messageContainer = 'Unread';;
  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private auth : AuthService,
    private router: Router
  ) {}

  // when we user resolve it automatically subscribes to the method so dont have to subscribe ourselves
  resolve(route: ActivatedRouteSnapshot): Observable<Message[]> {
    return this.userService.getMessages(this.auth.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer).pipe(
      catchError(error => {
        this.alertify.error('Problem retrieving messages');
        this.router.navigate(['/home']);
        return of(null); // null observable
      })
    );
  }
}
