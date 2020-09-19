import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { GetDataService } from '../get-data.service';
import { BestSeller } from '../best-seller';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  restDetails: any;
  constructor(private getdata: GetDataService) { }
  foods = [
    new BestSeller(1, 'Non-Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Egg Burji', 80, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', '2 Eggs'),
    new BestSeller(2, 'Non-Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Egg Burji', 80, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', '2 Eggs'),
    new BestSeller(3, 'Non-Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Egg Burji', 80, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', '2 Eggs'),
    new BestSeller(4, 'Non-Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Egg Burji', 80, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', '2 Eggs')
  ];
  breakfast = [
    new BestSeller(1, 'Non-Veg', 'https://cdn.cdnparenting.com/articles/2020/02/26144721/PURI-BHAJI-RECIPE.jpg', 'Puri Bhaji', 80, 'Many Indian households prefer puri bhaji and other traditional dishes over cereals for breakfast. Some serve it for lunch along with condiments such as Salad and Pickle.', 'Poori [4 Poori]+Bhaji+Pickle+Salad'),
    new BestSeller(2, 'Non-Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Egg Burji', 80, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', '2 Eggs'),
    new BestSeller(3, 'Non-Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Egg Burji', 80, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', '2 Eggs'),
    new BestSeller(4, 'Non-Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Egg Burji', 80, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', '2 Eggs')
  ];
  ngOnInit() {
    this.getdata.getRestaurantDetails().subscribe((res) => {
      this.restDetails = res;
      console.log('Parashar Kitchen', res);
    });
  }

}
