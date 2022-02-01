import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url:string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  get() {
    return this.http.get(this.url);
  }
  create(vee: any) {
    return this.http.post(this.url,
      { body: vee,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },}
      )
  }
  update() {}
   remove() {}
  


}
