import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/api/api.service';
import { LoginModel } from './models/login.model';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required),
  });

  constructor(private loginService: LoginService) { }


  save(): void {

    let loginModel: LoginModel = this.loginForm.value; 
    this.loginService.login(loginModel)
      .subscribe((x) => console.log(x));
  }

}
