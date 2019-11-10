import { Component, OnInit, Input } from "@angular/core";
import { Subscription, Observable } from "rxjs";
import { Post, Commentary, User } from "src/app/shared/services/interfaces";
import { PostService } from "src/app/shared/services/post.service";
import { UserService } from "src/app/shared/services/user.service";
import { identifierModuleUrl } from "@angular/compiler";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.css"]
})
export class PostsListComponent implements OnInit {
  pSub: Subscription;
  posts: Post[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.pSub = this.postService.getPosts().subscribe(data => {
      let res = data["result"];
      this.posts = res;
    });
  }
  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }
}
