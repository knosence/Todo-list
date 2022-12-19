import { Component, Directive, HostListener, Input, Self } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'todo-app';

  todos: any[] = [];
  completedTodos: any[] = [];

  constructor() {

  }

  ngOnInit() {

  }
  // Add task to the todo-list
  addTask(text: string): void {
    this.todos.push();
  }
}
