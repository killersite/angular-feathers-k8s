import { Todo } from './../../classes/todo';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @ViewChild('editedtodo') editInput: ElementRef;

  @Input() public todo: Todo;
  @Output() delete = new EventEmitter<Todo>();

  editing = false;
  completed = false;

  constructor() { }

  ngOnInit() {
  }

  editTodo() {
    this.editing = true;
    setTimeout(() => {
      this.editInput.nativeElement.focus();
    })
  }

  remove() {
    this.delete.emit(this.todo);
  }

  stopEditing() {
    this.editing = false
  }

  updateEditingTodo() {
    this.editing = false
  }

  cancelEditingTodo() {
    this.editing = false
  }

}
