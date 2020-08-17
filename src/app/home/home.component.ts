import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  restDetails: any;
  constructor(private getdata: GetDataService) { }

  ngOnInit() {
    this.getdata.getRestaurantDetails().subscribe((res) => {
      this.restDetails = res;
      console.log('Parashar Kitchen', res);
    });
  }
}
