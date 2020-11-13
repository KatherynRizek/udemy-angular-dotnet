import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

//onInit is a lifecycle hook that is called after Angular has initialized all data-bound properties
//of a directive. Define an ngOnInit() method to handle any additional initialization tasks.
export class AppComponent implements OnInit {
    title = 'Dating App';
    users: any;

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.setCurrentUser();
    }

    setCurrentUser() {
        const user: User = JSON.parse(localStorage.getItem('user'));
        this.accountService.setCurrentUser(user);
    }
}
