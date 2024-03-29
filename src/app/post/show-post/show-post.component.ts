import { Component, OnInit } from "@angular/core";
import { PostService } from "src/app/shared/services/post.service";
import { ActivatedRoute } from "@angular/router";
import { Commentary } from "src/app/shared/services/interfaces";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { of } from "rxjs";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-show-post",
  templateUrl: "./show-post.component.html",
  styleUrls: ["./show-post.component.css"]
})
export class ShowPostComponent implements OnInit {
  post: any;
  comments: Commentary;
  form: FormGroup;
  users: any;
  id = this.route.snapshot.params["id"];
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    of(
      this.userService.getUsers().subscribe(data => {
        this.users = data["result"];
      })
    );
  }

  ngOnInit() {
    this.post = this.postService.getById(this.id).subscribe(data => {
      this.post = data["result"];
    });
    this.post = this.postService.getCommentsByIdPost(this.id).subscribe(com => {
      console.log(com);
      this.comments = com["result"];
    });
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      body: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  submit() {
    const comment: Commentary = {
      body: this.form.value.body,
      email: this.form.value.email,
      name: this.form.value.name,
      post_id:this.id
    };
    this.postService.createComment(comment).subscribe(() => {
      this.form.reset();
    });
  }
}
