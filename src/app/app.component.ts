import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoTask } from './models/todo-task';
import { DataService } from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'todo-app';

  isErrorsValid: boolean = false;

  ngOnInit(): void {

  }

  constructor(private dataService: DataService) {}

  onFormSubmit(form: NgForm) {   
    if (form.invalid) return this.isErrorsValid = true
    else return [this.dataService.addTodo(new TodoTask(form.value.text)),
      this.isErrorsValid = false,
      form.reset()]
  }
}
