import { Component } from '@angular/core';
import { TodoTask } from '../models/todo-task';

@Component({
    selector: 'app-active',
    templateUrl: './active.component.html',
    styleUrls: ['./active.component.css']
})
export class ActiveComponent {
    todos: TodoTask[] = [
        {
            id: 1,
            text: "this is the first task",
            isCompleted: false
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
            isCompleted: false
        },
        {
            id: 3,
            text: "this is the third task",
            isCompleted: false
        },
        {
            id: 4,
            text: "this is the fouth task",
            isCompleted: false
        },
        {
            id: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
            isCompleted: true
        },
        {
            id: 6,
            text: "this is the sixth task",
            isCompleted: true
        },
        {
            id: 7,
            text: "this is the seventh task",
            isCompleted: true
        },
        {
            id: 8,
            text: "this is the eighth task",
            isCompleted: true
        },
    ];
}
