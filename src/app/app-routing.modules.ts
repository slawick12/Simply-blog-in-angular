import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserCreateComponent } from "./user/user-create/user-create.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserPageComponent } from './user/user-page/user-page.component';
import { PostsListComponent } from './post/posts-list/posts-list.component';
import { PostPageComponent } from './post/post-page/post-page.component';
import { PostCreateComponent } from './post/post-create/post-create.component';

const routes: Routes = [
  {path: "user-create", component: UserCreateComponent},
  { path: "user-list", component: UserListComponent },
  { path: "user-list/:id", component: UserPageComponent },
  {path: "post-list", component: PostsListComponent},
  {path: "post-list/:id", component: PostPageComponent },
  {path: "post-create", component: PostCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
