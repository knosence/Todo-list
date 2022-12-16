import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { CompletedComponent } from '../completed/completed.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  //Functions
  todos: any[] = [];
  completedTodos: any[] = [];
  editedTask: any;
  edit = false;

  constructor() { }

  ngOnInit() {

  }
  // function to move the todo task to the completed list
  completeTask(task: any) {
    this.todos = this.todos.filter(t => t !== task);
    this.completedTodos.push(task);
  }
  
  // function to edit task if mispell or any erros
  editTask(task: any) {
    this.edit = true;
    this.editedTask = task;
  }
  // function to delete task if decided not to be on the list anymore
  deleteTask(task: any) {
    const index = this.todos.indexOf(task);
    this.todos.splice(index, 1);
  }

}
