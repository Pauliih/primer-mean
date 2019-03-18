import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  @Output() destroyUserEvent = new EventEmitter();
  @Output() updateUserEvent = new EventEmitter();

  @Input() users;
  constructor() { }

  ngOnInit() {
  }

  destroy(user: User) {
    const response = confirm('Delete?');
    if (response) {
      this.destroyUserEvent.emit(user);
    }
  }

  update(users: User) {
    this.updateUserEvent.emit(users);
  }

}
