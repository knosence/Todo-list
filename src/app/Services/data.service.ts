import { Injectable } from "@angular/core";
import { TodoTask } from "../models/todo-task";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    todos: TodoTask[] = [
        new TodoTask('This is a test'),
        new TodoTask('This is one more test'),
        new TodoTask(
            "this is the first task"
        ),
        new TodoTask(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
        ),
        new TodoTask(
            "this is the third task", true
        ),
        new TodoTask(
            "this is the fouth task"
        ),
        new TodoTask(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco", true
        ),
        new TodoTask(
            "this is the sixth task", true
        ),
        new TodoTask(
            "this is the seventh task", true
        ),
        new TodoTask(
            "this is the eighth task", true
        ),
    ]

    constructor() { }

    getAllTodos() {
        return this.todos
    }

    updateTodo(index: number, updateTodo: TodoTask) {
        this.todos[index] = updateTodo
    }

    addTodo(todo: TodoTask) {
        this.todos.unshift(todo)
    }

    deleteTodo(index: number) {
        this.todos.splice(index, 1)
    }
}