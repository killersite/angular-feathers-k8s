import { Todo } from './../../classes/todo';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  @Output() addTodo = new EventEmitter<string>();
  
  newTodoText: string = '';

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.addTodo.emit(this.newTodoText)
  }

}
