import { Component, OnInit } from '@angular/core';
import { ClickService } from './services/click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClickService]
})
export class AppComponent implements OnInit {


  allClicks: number;

  constructor(private clickService: ClickService) {

  }

  ngOnInit(): void {
    this.clickService.getSum().subscribe(clicks => {
    this.allClicks = clicks;
    });
  }







/*
  newTask: string;
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  ngOnInit(): void {
    this.tasksList = ['Sprzątanie kuwety', 'Gotowanie', 'Nauka Angulara', 'Podlewanie kwiatów', 'Zakupy']
  }

  add(task: string) {
    this.tasksList.push(task);
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }


  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }
  constructor() {

  }*/
}




