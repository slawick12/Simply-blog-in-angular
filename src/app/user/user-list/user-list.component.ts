import { Component, OnInit, Output, Input } from "@angular/core";
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
  pSub: Subscription;
  @Output() users:User[]

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      let res = data["result"];
      this.users = res;
    });
  }
  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }
  remove(id:string){
    this.userService.remove(id).subscribe(() =>{
      this.users = this.users.filter(user => user.id != id)
    })
  }
}
