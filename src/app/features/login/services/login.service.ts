import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from 'src/app/core/api/api.service';
import { LoginResponseModel } from '../models/login-response.model';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private apiService: ApiService,
    ) { }

  login(request: LoginModel): Observable<LoginResponseModel> {
    return this.apiService.post('/account/authorize', request)
    .pipe(
      map((response: any) => {
        let responseData: LoginResponseModel = response.data;
        localStorage.setItem("authConfig",JSON.stringify(responseData));
        return responseData;
      })
    );
  }
  
}
