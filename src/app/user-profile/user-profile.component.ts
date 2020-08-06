import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  constructor(private userServeice: UserService, private router: Router) { }

  ngOnInit() {
    this.userServeice.getUserProfile().subscribe(
      res => {
        // tslint:disable-next-line: no-string-literal
        this.userDetails = res['user'];
      },
      err => { }
    );
  }
  onLogout() {
    this.userServeice.deleteToken();
    this.router.navigateByUrl('/login');
  }
}
