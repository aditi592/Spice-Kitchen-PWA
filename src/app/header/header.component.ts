import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { faSmileBeam, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  faSmile = faSmileBeam;
  faSignOut = faSignOutAlt;
  userDetails: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {}
  ShowMe() {
    this.userService.getUserProfile().subscribe(
      res => {
        // tslint:disable-next-line: no-string-literal
        this.userDetails = res['user'];
      },
      err => {
      }
    );
    const x = document.getElementById('showDetails');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
  logout() {
    this.userService.deleteToken();
    this.router.navigateByUrl('/login');
  }
}
