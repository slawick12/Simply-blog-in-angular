import { Injectable, ViewChild, Output, EventEmitter } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, count } from "rxjs/operators";


@Injectable({ providedIn: "root" })
export class HeaderInterceptor implements HttpInterceptor {
  countPage:any
    constructor(){
     
    }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("interceptor reqest", req);

    const cloned = req.clone({
      headers: req.headers.append("Author", "Slawick")
    });
    return next.handle(cloned).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
         this.countPage = event.body._meta.pageCount
          console.log("interceptor response",event);
          localStorage.setItem("CountPage",this.countPage)
          event.clone({headers:event.headers.append("Page",this.countPage)})  
        }
      })
    );
  }
}
