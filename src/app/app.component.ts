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


  ngOnInit(): void {

  }

  constructor(private dataService: DataService) {}

   onFormSubmit(form: NgForm) {   
    this.dataService.addTodo(new TodoTask(form.value.text)),
    form.reset()
    
  }

  // onFormSubmit(form: NgForm) {   
  //    console.log(this.isErrorsValid)
  //   if (!form.valid) return this.flipBool(false);
  //    console.log(this.isErrorsValid + "before add")
  //   return [this.dataService.addTodo(new TodoTask(form.value.text)),
  //     this.flipBool(true),
  //      console.log(this.isErrorsValid+ " after add"),
  //     form.reset()]
  // }

  // flipBool(bool: boolean): boolean {
  //   console.log(this.isErrorsValid + "in method")
  //   return this.isErrorsValid = bool;
   
  // }
}
