import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userDetails: any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        // tslint:disable-next-line: no-string-literal
         this.userDetails = res['user'];

      },
      err => {

      }
    );
  }
  logout() {
    this.userService.deleteToken();
    this.router.navigateByUrl('/login');
  }
}
