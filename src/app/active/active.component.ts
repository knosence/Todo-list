import { Component, OnInit } from '@angular/core';
import { TodoTask } from '../models/todo-task';
import { DataService } from '../Services/data.service';

@Component({
    selector: 'app-active',
    templateUrl: './active.component.html',
    styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

    todos: TodoTask[] = [];

constructor(private dataService: DataService) {};

ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
}
 
}

