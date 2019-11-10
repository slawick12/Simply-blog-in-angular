import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { Commentary, User } from '../shared/services/interfaces';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comments:Commentary[]
@Input() post_id: string
show :boolean= false
  constructor(private postService: PostService,private userService: UserService) { }

  ngOnInit() {
    this.postService.getCommentsByIdPost(this.post_id).subscribe(data=>{
      let res = data["result"]
      this.comments = res
      })
  }
  showTogle(){
    this.show = !this.show
  }
}
