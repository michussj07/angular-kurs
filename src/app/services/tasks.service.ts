import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';
import { Http2Service } from './http2.service';


@Injectable()
export class TasksService {

   private taskListObs = new BehaviorSubject<Array<Task>>([]);


  constructor( private httpService: Http2Service) {
    const tasksList = [
      { name: 'Sprzątanie kuwety', created: new Date().toLocaleString(), isDone: false},
      { name: 'Gotowanie', created: new Date().toLocaleString(), isDone: false },
      { name: 'Nauka Angulara', created: new Date().toLocaleString(), isDone: false },
      { name: 'Podlewanie kwiatów', created: new Date().toLocaleString(), isDone: false },
      { name:  'Zakupy', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true }
    ];
    this.taskListObs.next(tasksList);
  }

  add(task: Task) {
    const list = this.taskListObs.getValue();
    list.push(task);
    this.taskListObs.next(list);
  }

  remove(task: Task) {
    const list = this.taskListObs.getValue().filter(e => e !== task);
    this.taskListObs.next(list);
  }


  done(task: Task) {
    task.end = new Date().toLocaleDateString();
    task.isDone = true;
    const list = this.taskListObs.getValue();
    this.taskListObs.next(list);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }


}
