import { Injectable } from "@angular/core";
import { Todo } from "./todo.model";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    todos: Todo[] = [

    ]

    constructor() { }

    getAllTodos() {
        return this.todos
    }

    updateTodo(index:number, updateTodo: Todo){
        this.todos[index] = updateTodo
    }

    addTodo(todo: Todo) {
        this.todos.push(todo)
    }

    deleteTodo(index: number) {
        this.todos.splice(index,1)
    }
}