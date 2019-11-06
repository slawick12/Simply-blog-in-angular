import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./interfaces";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { Key } from "protractor";

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: any;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      "https://gorest.co.in/public-api/users?access-token=zDaFK1F-OqoW1APJVJR3VS-BgG9Xlx_mAvkZ"
    );
  }
}
