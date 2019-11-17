import { Component, OnInit, ViewChild } from "@angular/core";
import {  Subscription } from "rxjs";
import { ActivatedRoute, Params } from "@angular/router";
import { UserService } from "src/app/shared/services/user.service";
import { switchMap } from "rxjs/operators";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from 'src/app/shared/services/interfaces';

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
  styleUrls: ["./user-page.component.css"]
})
export class UserPageComponent implements OnInit {
  form: FormGroup;
  submited:boolean = false;
  uSub: Subscription;
  user:any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = this.userService
      .getById(this.route.snapshot.params["id"])
      .subscribe(data => {
        console.log(data);
        this.user = data["result"];
      });
    this.form = new FormGroup({
      first_name: new FormControl(null, Validators.required),
      last_name: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required),
    });
  }
  submit() {
    this.userService
      .updateUser({
        ...this.user,
        first_name: this.form.value.first_name,
        last_name: this.form.value.last_name,
        gender: this.form.value.gender,
        email: this.form.value.email,
        phone:this.form.value.phone,
        address:this.form.value.address
      })
      .subscribe(() => {
        console.log(this.user)
        this.submited = !this.submited;
      });
  }
}
