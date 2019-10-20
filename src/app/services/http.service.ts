import { Injectable } from '@angular/core';
import { Post } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number) {

  }
  getPostByUser(userId: number) {

  }

  addPost(post: Post) {
  }

  updatePost(post: Post) {

  }

  deletePost(id: number) {

  }

  changePost(post: Post) {

  }
}
