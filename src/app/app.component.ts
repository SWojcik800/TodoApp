import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponseModel } from './features/login/models/login-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoApp';

  constructor() { }
}
