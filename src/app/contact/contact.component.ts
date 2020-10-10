import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    if (this.userServ.isLoggedIn()) {
      $('#login').remove();
      $('#register').remove();
    }
    else {
      $('#home').remove();
      $('#header-prof').remove();
    }
  }
}
