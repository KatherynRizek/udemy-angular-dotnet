import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//onInit is a lifecycle hook that is called after Angular has initialized all data-bound properties 
//of a directive. Define an ngOnInit() method to handle any additional initialization tasks.
export class AppComponent implements OnInit{
  title = 'Dating App';
  users: any;

  constructor(private http: HttpClient) {} 

  ngOnInit() {
    this.http.get('https://localhost:5001/api/users').subscribe(response =>{
      this.users = response;
    }, error => {
      console.log(error);
    });
  }
}
