import { Component, OnInit, } from '@angular/core';
import { TodoTask } from '../models/todo-task';
import { DataService } from '../Services/data.service';

@Component({
    selector: 'app-active',
    templateUrl: './active.component.html',
    styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

    todos: TodoTask[] = [];
    editable: boolean = false;
    todo: TodoTask | undefined;


    constructor(private dataService: DataService) { };

    ngOnInit(): void {
        this.todos = this.dataService.getAllTodos();
    }



    flipCompleted(todo: TodoTask) {
        todo.isCompleted = !todo.isCompleted;
    }

    flipAllActive(todos: TodoTask[]) {
        todos.map(todo => todo.isCompleted = false);
    }

    editTodo(todo: TodoTask) {
        const index = this.todos.indexOf(todo)
        this.editable = true;

        this.todos[index].text = todo.text
        

    }

    updatingTodo(text: string, todo: TodoTask): void {
        const index = this.todos.indexOf(todo)
        console.log(text);
        this.todos[index].text = text;
        this.editable = false;
    }

    cancelEdit() {
        this.editable = false;
    }

}

