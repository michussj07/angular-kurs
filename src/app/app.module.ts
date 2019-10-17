import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { Klikacz1Component } from './klikacz1/klikacz1.component';
import { Klikacz2Component } from './klikacz2/klikacz2.component';
import { ClickService } from './services/click.service';
import { LogService } from './services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    ChildComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    Klikacz1Component,
    Klikacz2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
