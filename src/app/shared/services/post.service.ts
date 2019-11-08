import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post , Commentary} from './interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  post:Post
constructor(private http : HttpClient) { }

getPosts(): Observable<Post[]> {   
  // let count = localStorage.getItem('CountPage')
  // console.log(count)
  //et params = new HttpParams().set("page", count)
  return this.http.get<Post[]>(
    `${environment.restURL}/posts?access-token=${environment.apiKey}`
    
    //, { params }
  )
}
getComments():Observable<Comment[]>{
  return this.http.get<Comment[]>(
    `${environment.restURL}/comments?access-token=${environment.apiKey}`)
}
getCommentsByIdPost(id:string):Observable<Comment[]>{
let params = new HttpParams().set("id", id)
return this.http.get<Comment[]>(`${environment.restURL}/comments/${id}?access-token=${environment.apiKey}`)
}
getById(id:string):Observable<Post>{
  return this.http.get<Post>(`${environment.restURL}/posts/${id}?access-token=${environment.apiKey}`).pipe(
    map((post: Post) => {
      return {
      ...post,
        id,
      };
    })
  );
}
updateUser(post:Post):Observable<Post>{
  return this.http.patch<Post>(`${environment.restURL}/posts/${post.id}?access-token=${environment.apiKey}`,post)
}
}
