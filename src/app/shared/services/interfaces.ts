export interface User {
  id?: string;
  first_name: string;
  last_name: string;
  address:string;
  gender: string;
  phone:string
  email: string;
}
export interface FbCreateResponse {
  name: string;
}
export interface Post{
  id?:string;
  user_id:string
  title:string
  body:string
}
export interface Commentary{
  id?:string
  post_id:string
  name?:string
  email:string
  body:string
}
