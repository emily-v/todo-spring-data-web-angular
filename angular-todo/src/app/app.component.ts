import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appTitle = 'Welcome to Angular Todos';
  // number = 4;
  // bool = true;

  // person = {
  //   name: 'August',
  //   age: 35
  // };

  ngOnInit(): void {
    // setInterval(() => this.bool = !this.bool, 2000);
  }
}
