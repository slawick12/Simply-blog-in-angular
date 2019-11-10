import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { Post, User } from 'src/app/shared/services/interfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  form: FormGroup;
  users:User[]
  constructor(private postService: PostService, private userService: UserService ) {
    of(this.userService.getUsers().subscribe(data=>{
      this.users = data['result'];
    }))
  }
  ngOnInit() {
    this.form = new FormGroup({
      user_id: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      body: new FormControl(null, Validators.required)
    });
  }
 
  submit() {
    const post: Post = {
      user_id: this.form.value.user_id,
      title: this.form.value.title,
      body: this.form.value.body
    };
    this.postService.createPost(post).subscribe(() => {
      this.form.reset()
    });
  }

}
