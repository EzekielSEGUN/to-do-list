import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';


import { FooterComponent } from './components/footer/footer.component';
import { TodosComponent } from './components/todos/todos.component';
import { MainComponent } from './components/main/main.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosService } from './services/todos.service';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [
    TodosComponent,
    HeaderComponent,
    MainComponent,
    TodoComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [TodosService],
})
export class TodosModule {}
