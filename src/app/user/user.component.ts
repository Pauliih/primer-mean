import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [
    new User(1, 'Paula', 'Campos', 'pau@gmail.com'),
    new User(2, 'Carolina', 'Celis', 'caro@gmail.com'),
    new User(3, 'Macarena', 'Fuentes', 'maca@gmail.com')
  ];
  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    // this.getUsers();
  }

  getUsers() {
    // this._userService.getUsers()
    // .then(users => this.users = users);
  }
}
