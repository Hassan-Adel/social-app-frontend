import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormControl;
    constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.registerForm = new FormControl({
      username: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
    });
  }

  register(){
    // this.authService.register(this.model).subscribe(
    //   () => {
    //     this.alertify.success('regiser sucessful');
    //   }, error => {
    //     this.alertify.error(error);
    //   }
    // );
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
