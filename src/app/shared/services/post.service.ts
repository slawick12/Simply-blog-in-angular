import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Post, FbCreateResponse, Commentary } from "./interfaces";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PostService {
  post: Post;
  comment: Commentary;
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(
      `${environment.restURL}/posts?access-token=${environment.apiKey}`
    );
  }
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      `${environment.restURL}/comments?access-token=${environment.apiKey}`
    );
  }
  getCommentsByIdPost(id:string): Observable<Commentary[]> {
    return this.http.get<Commentary[]>(
      `${environment.restURL}/comments/${id}?access-token=${environment.apiKey}`
    );
  }
  getById(id: string): Observable<Post> {
    return this.http
      .get<Post>(
        `${environment.restURL}/posts/${id}?access-token=${environment.apiKey}`
      )
      .pipe(
        map((post: Post) => {
          return {
            ...post,
            id
          };
        })
      );
  }
  updatePost(post: Post): Observable<Post> {
    return this.http.patch<Post>(
      `${environment.restURL}/posts/${post.id}?access-token=${environment.apiKey}`,
      post
    );
  }
  createPost(post: Post): Observable<Post> {
    return this.http
      .post(
        `${environment.restURL}/posts?access-token=${environment.apiKey}`,
        post
      )
      .pipe(
        map((response: FbCreateResponse) => {
          return {
            ...post,
            id: response.name
          };
        })
      );
  }
  createComment(comment: Commentary): Observable<Commentary> {
    console.log(comment);
    return this.http
      .post(
        `${environment.restURL}/comments?access-token=${environment.apiKey}`,
        comment
      )
      .pipe(
        map((response: FbCreateResponse) => {
          return {
            ...comment,
            id: response.name
          };
        })
      );
  }
}
