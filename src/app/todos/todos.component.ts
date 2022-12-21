import { Component, OnInit } from '@angular/core';
import { TodoTask } from '../models/todo-task';
import { DataService } from '../models/data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  todos: TodoTask[] = [];

  constructor(private dataService: DataService) { 
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {
  //   this.todos = this.dataService.getAllTodos()
  // }

  // function to move the todo task to the completed list
  completeTask(todo: TodoTask) {
    todo.isCompleted = !todo.isCompleted;
  }
  
  // function to edit task if mispell or any erros
  editTask(todo: TodoTask) {
  
  }
  // function to delete task if decided not to be on the list anymore
  deleteTask(todo: TodoTask) {
    const index = this.todos.indexOf(todo)
    this.dataService.deleteTodo(index)
  }

}
