import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { AppRoutingModule } from './app-routing.modules';
import { UserListComponent } from './user/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ValueArrayPipePipe } from './shared/ValueArrayPipe.pipe';


@NgModule({
   declarations: [
      AppComponent,
      UserCreateComponent,
      UserListComponent,
      ValueArrayPipePipe
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule

   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
