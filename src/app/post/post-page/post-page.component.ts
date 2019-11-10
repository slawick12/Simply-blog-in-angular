import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/shared/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/shared/services/interfaces';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  form: FormGroup;
  submited = false;
  uSub: Subscription;
  post: any;
  posts:Post[]
  constructor(private postService: PostService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    console.log(this.post);
    this.post = this.postService
      .getById(this.route.snapshot.params["id"])
      .subscribe(data => {
        console.log(data);
        this.post = data["result"];
      });
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      body: new FormControl(null, Validators.required)
    });
  }
  submit() {
    this.postService
      .updatePost({
        ...this.post,
        title: this.form.value.title,
        body: this.form.value.body
      })
      .subscribe(() => {
        this.submited = false;
      });
  }
}
