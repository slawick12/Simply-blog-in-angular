import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/shared/services/user.service";
import { User } from "src/app/shared/services/interfaces";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AlertifyService } from "src/app/shared/services/alert.service";

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.css"]
})
export class UserCreateComponent implements OnInit {
  form: FormGroup;
  constructor(
    private userService: UserService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      first_name: new FormControl(null, Validators.required),
      last_name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }
  submit() {
    const user: User = {
      first_name: this.form.value.first_name,
      last_name: this.form.value.last_name,
      gender: this.form.value.gender,
      email: this.form.value.email,
      phone: this.form.value.phone,
      address: this.form.value.address
    };
    this.userService.createUser(user).subscribe(
      success => {
        this.form.reset();
        this.alertify.success("User was created");
      },
      error => {
        this.alertify.success("Something went wrong");
      }
    );
  }
}
