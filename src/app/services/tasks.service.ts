import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';


@Injectable()
export class TasksService {


  private tasksList: Array<Task> = [];
  private tasksDone: Array<Task> = [];

   private taskListObs = new BehaviorSubject<Array<Task>>([]);
   private taskDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasksList = [
      { name: 'Sprzątanie kuwety', created: new Date() },
      { name: 'Gotowanie', created: new Date() },
      { name: 'Nauka Angulara', created: new Date() },
      { name: 'Podlewanie kwiatów', created: new Date() },
      { name:  'Zakupy', created: new Date() },
    ];
    this.taskListObs.next(this.tasksList);
  }

  add(task: Task) {
    this.tasksList.push(task);
    this.taskListObs.next(this.tasksList);
  }

  remove(task: Task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.taskListObs.next(this.tasksList);
  }


  done(task: Task) {
    this.tasksDone.push(task);
    this.remove(task);
    this.taskDoneObs.next(this.tasksDone);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<Task>> {
    return this.taskDoneObs.asObservable();
  }

}
