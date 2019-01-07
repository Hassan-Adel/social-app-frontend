import { Injectable } from '@angular/core';
declare let alertify: any; // to avoid tslist errors

@Injectable({
  providedIn: 'root'
})
// just a demonstration of how you can do this.
// You can pick whatever alertify methods you want and add wrappers around them and then when we want to
// call them we inject our alertify service into our components and then we use the methods inside that service
// to call these different methods here which are really just wrappers around alertify existing javascript
export class AlertifyService {
  constructor() {}

  // okCllback is going to be a function that we provide when we use this confirm method.
  confirm(message: string, okCllback: () => any) {
    alertify.confirm(message, function(clickEvent) {
      if (clickEvent) {
        okCllback();
      } else {
      }
    });
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string){
    alertify.error(message);
  }

  warning(message: string){
    alertify.warning(message);
  }

  message(message: string){
    alertify.message(message);
  }

}
