import { Component, OnInit } from '@angular/core';
import { ClickService } from './services/click.service';
import { HttpService } from './services/http.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:
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
    // tslint:disable-next-line: no-shadowed-variable
    this.httpService.getPost(1).subscribe(post => {
      console.log(post);
    });
  }
  getPostByUser() {
    this.httpService.getPostByUser(1).subscribe(posts => {
      console.log(posts);
    });
  }

  addPost() {
    const p: Post = ({
      userId: 1,
      id: null,
      title: 'Mój post',
      body: 'Pierwszy post o angularze!',
    });

    this.httpService.addPost(p).subscribe(posts => {
      console.log(posts);
    });
  }

  updatePost() {
    const p: Post = ({
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehendrit',
      body: 'nowy wpis',
    });
    this.httpService.updatePost(p).subscribe(post => {
      console.log(post);
    });
  }

  deletePost() {
    this.httpService.deletePost(1).subscribe(post => {
      console.log(post);
    });
  }

  changePost() {
    const p: Post = ({
      id: 1,
      body: 'zmieniam tylko wpis',
    });
    this.httpService.changePost(p).subscribe(post => {
      console.log(post);
    });
  }

}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}




