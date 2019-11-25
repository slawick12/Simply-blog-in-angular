import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Provider } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSimpleSliderModule } from "ngx-simple-slider";
import { AlertifyService } from './shared/services/alert.service';

import { AppComponent } from "./app.component";
import { UserCreateComponent } from "./user/user-create/user-create.component";
import { AppRoutingModule } from "./app-routing.modules";
import { UserListComponent } from "./user/user-list/user-list.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeaderInterceptor } from "./shared/services/user.interceptor";
import { UserPageComponent } from "./user/user-page/user-page.component";
import { PostsListComponent } from "./post/posts-list/posts-list.component";
import { CommentsComponent } from "./comments/comments.component";
import { PostPageComponent } from "./post/post-page/post-page.component";
import { PostCreateComponent } from "./post/post-create/post-create.component";
import { ShowPostComponent } from "./post/show-post/show-post.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";



const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: HeaderInterceptor
};
@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UserListComponent,
    UserPageComponent,
    PostsListComponent,
    CommentsComponent,
    PostPageComponent,
    PostCreateComponent,
    ShowPostComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    NgxSimpleSliderModule,
    BsDropdownModule.forRoot()
  ],
  providers: [INTERCEPTOR_PROVIDER, AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
