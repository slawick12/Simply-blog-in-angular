import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserCreateComponent } from "./user/user-create/user-create.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserPageComponent } from './user/user-page/user-page.component';

const routes: Routes = [
  {path: "user-create", component: UserCreateComponent},
  { path: "user-list", component: UserListComponent },
  { path: "user-list/:id", component: UserPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
