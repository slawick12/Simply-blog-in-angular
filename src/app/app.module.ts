import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Provider } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination'

import { AppComponent } from "./app.component";
import { UserCreateComponent } from "./user/user-create/user-create.component";
import { AppRoutingModule } from "./app-routing.modules";
import { UserListComponent } from "./user/user-list/user-list.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeaderInterceptor } from './shared/services/user.interceptor';
import { UserPageComponent } from './user/user-page/user-page.component';
import {TabsModule} from 'ngx-tabset';
import { PostsListComponent } from './post/posts-list/posts-list.component';
import { CommentsComponent } from './comments/comments.component';
import { PostPageComponent } from './post/post-page/post-page.component';

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
      PostPageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      TabsModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      NgxPaginationModule
   ],
   providers: [
      INTERCEPTOR_PROVIDER
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
