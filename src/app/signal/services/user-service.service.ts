import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private http = inject(HttpClient)
  private baseUrl = 'https://reqres.in/api/users';

  getUserById(id:number):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/${id}`)
      .pipe(
        map(response=>response),
      )
  }

}
