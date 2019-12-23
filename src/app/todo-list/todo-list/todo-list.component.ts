import { Component, OnInit } from '@angular/core';

// Service
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoListService.add('Item 1');
    this.todoListService.add('Item 2', true);
    this.todoListService.add('Item 3');
  }

}
