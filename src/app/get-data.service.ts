import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  restaurantUrl = 'https://developers.zomato.com/api/v2.1/restaurant';
  constructor(private http: HttpClient) { }
  getRestaurantDetails() {
    const params = new HttpParams();
    const headers = {
      headers: new HttpHeaders({
        'user-key': 'b7d95c68cfcc7d24039463a616614c14'
      }),
      params: params.append('res_id', '34383'),
    };
    return this.http.get(this.restaurantUrl, headers);
  }
}
