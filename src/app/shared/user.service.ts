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
  noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };
  constructor(private http: HttpClient) { }

  postUser(user: User) {
    return this.http.post(environment.appBaseUrl + '/register', user, this.noAuthHeader);
  }
  login(authCredentials) {
    return this.http.post(environment.appBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
  }
  getUserProfile() {
    return this.http.get(environment.appBaseUrl + '/userProfile');
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    // return localStorage.getItem('token');
    return JSON.parse(localStorage.getItem('token'));
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  getUserPayLoad() {
    const token = this.getToken();
    if (token) {
      const userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else {
      return null;
    }
  }
  isLoggedIn() {
    const userPayload = this.getUserPayLoad();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    }
  }
}
