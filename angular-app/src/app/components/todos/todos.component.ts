import { TodosService } from './../../services/todos.service';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Todo } from '../../classes/todo';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {
  public todos: Todo[] = [];
  private subscription: Subscription;

  constructor(
    private todoService: TodosService,
    private ref: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.subscription = this.todoService.todos$.subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
        this.ref.markForCheck();
      },
      err => {
        console.error(err);
      }
    );
    this.todoService.find();
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addTodo(title: string) {
    this.todoService.addTodo(title);
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
