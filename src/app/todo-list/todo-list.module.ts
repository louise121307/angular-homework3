import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ItemComponent } from './item/item.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [TodoListComponent, ItemComponent, InputComponent],
  imports: [
    CommonModule
  ],
  exports: [TodoListComponent]
})
export class TodoListModule { }
