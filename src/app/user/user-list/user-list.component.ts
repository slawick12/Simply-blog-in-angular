import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/shared/services/user.service";
import { User } from "src/app/shared/services/interfaces";
import { Subscription, Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { HttpParams } from '@angular/common/http';

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  users: User[];
  pSub: Subscription;


  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.pSub = this.userService.getUsers().subscribe(data => {
      let res = data["result"];
      this.users = res;
    });
  }
  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }
}
