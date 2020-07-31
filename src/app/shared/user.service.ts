import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    phone: 0,
    password: ''
  };
  constructor(private http: HttpClient) { }
  postUser(user: User) {
   return this.http.post(environment.appBaseUrl + '/register', user);
  }
}
