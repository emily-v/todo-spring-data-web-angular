import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { TodosModule } from './todos/todos.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './todos/todos-routing.module#TodosRoutingModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    TodosModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
