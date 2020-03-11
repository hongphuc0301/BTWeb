import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  register(user: User) {
      console.log("user", user);
      return this.http.post(`http://localhost:3000/auth/register`, user);
  }

}