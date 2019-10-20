import { Component, OnInit } from '@angular/core';
import { ClickService } from './services/click.service';
import { HttpService } from './services/http.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers:
})
export class AppComponent {

  constructor(private httpService: HttpService) {

  }

  getPosts() {
    this.httpService.getPosts().subscribe(posts => {
      console.log(posts);
    });
  }

  getPost() {

  }
  getPostByUser() {

  }

  addPost() {
    const post: Post = ({
      userId: 1,
      id: null,
      title: 'Mój post',
      body: 'Pierwszy post o angularze!',
    });
  }

  updatePost() {
    const post: Post = ({
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehendrit',
      body: 'nowy wpis',
    });
  }

  deletePost() {

  }

  changePost() {
    const post: Post = ({
      id: 1,
      body: 'zmieniam tylko wpis',
    });
  }

}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}




