import { Component, OnInit } from "@angular/core";
import { User } from "src/app/shared/services/interfaces";
import { Observable, Subscription } from "rxjs";
import { ActivatedRoute, Params } from "@angular/router";
import { UserService } from "src/app/shared/services/user.service";
import { switchMap } from "rxjs/operators";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
  styleUrls: ["./user-page.component.css"]
})
export class UserPageComponent implements OnInit {
  form: FormGroup;
  submited = false;
  uSub: Subscription;
  user: any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    console.log(this.user)
    this.user = this.userService
      .getById(this.route.snapshot.params["id"])
      .subscribe(data => {
        console.log(data);
        this.user = data["result"]
    this.form = new FormGroup({
      first_name:new FormControl(null,Validators.required),
      last_name:new FormControl(null,Validators.required)
    })
  }
  
  )
}
  submit(){
   this.userService
      .updateUser({
        ...this.user,
        first_name: this.form.value.first_name,
        last_name: this.form.value.last_name,
      })
      .subscribe(() => {
        this.submited = false;
      });
  }
}
