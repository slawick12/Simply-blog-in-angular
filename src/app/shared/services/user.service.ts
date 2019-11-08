import { Injectable, ViewChild, AfterViewChecked, AfterViewInit } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User, FbCreateResponse } from "./interfaces";
import { environment } from "src/environments/environment";
import { map, count } from "rxjs/operators";
import { HeaderInterceptor } from "../services/user.interceptor";
@Injectable({
  providedIn: "root"
})
export class UserService {
  
  
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {   
    let count = localStorage.getItem('CountPage')
    console.log(count)
    let params = new HttpParams().set("page", count)
    return this.http.get<User[]>(
      `${environment.restURL}/users?access-token=${environment.apiKey}`,
      { params }
    );
  }

  createUser(user: User): Observable<User> {
    return this.http
      .post(
        `${environment.restURL}/users?access-token=${environment.apiKey}`,
        user
      )
      .pipe(
        map((response: FbCreateResponse) => {
          return {
            ...user,
            id: response.name
          };
        })
      );
  }
  updateUser(user:User):Observable<User>{
    return this.http.patch<User>(`${environment.restURL}/users/${user.id}?access-token=${environment.apiKey}`,user)
  }
  getById(id:string):Observable<User>{
    return this.http.get<User>(`${environment.restURL}/users/${id}?access-token=${environment.apiKey}`).pipe(
      map((user: User) => {
        return {
        ...user,
          id,
        };
      })
    );
  }
  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.restURL}/users/${id}?access-token=${environment.apiKey}`)
  }
}
