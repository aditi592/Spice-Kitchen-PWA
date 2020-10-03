import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { BestSeller } from '../best-seller';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor(private getdata: GetDataService) { }
  panelOpenState = false;
  restDetails: any;
  foods = [
    new BestSeller('f1', 'Non-Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Egg Burji', 80, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', '2 Eggs'),
    new BestSeller('f2', 'Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Sattu Paratha', 100, 'Sattu Paratha is popular in Bihar. Sattu is full of nutrients like protein thus making this a healthy dish.', 'Sattu Paratha [2 Pieces] +Chokha +Salad'),
    new BestSeller('f3', 'Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Rajma Meal', 149, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', 'Rajma+Rice+Salad+Pickle'),
    new BestSeller('f4', 'Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Afghani Soya Chaap', 199, 'Soya chaap marinated in a marinade made with yogurt/curd, cream and mild spices and then cooked in a tandoor', '8 Pieces')
  ];
  breakfast = [
    new BestSeller('f5', 'Veg', 'https://cdn.cdnparenting.com/articles/2020/02/26144721/PURI-BHAJI-RECIPE.jpg', 'Medu Vada', 80, 'Many Indian households prefer puri bhaji and other traditional dishes over cereals for breakfast. Some serve it for lunch along with condiments such as Salad and Pickle.', '5 Medu Vada'),
    new BestSeller('f6', 'Non-Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Egg Burji', 80, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', '2 Eggs'),
    new BestSeller('f7', 'Non-Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Egg Burji', 80, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', '2 Eggs'),
    new BestSeller('f8', 'Non-Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Egg Burji', 80, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', '2 Eggs')
  ];
  maincourse = [
    new BestSeller('f9', 'Non-Veg', 'https://cdn.cdnparenting.com/articles/2020/02/26144721/PURI-BHAJI-RECIPE.jpg', 'Puri Bhaji', 80, 'Many Indian households prefer puri bhaji and other traditional dishes over cereals for breakfast. Some serve it for lunch along with condiments such as Salad and Pickle.', 'Poori [4 Poori]+Bhaji+Pickle+Salad'),
    new BestSeller('f10', 'Non-Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Egg Burji', 80, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', '2 Eggs'),
    new BestSeller('f11', 'Non-Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Egg Burji', 80, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', '2 Eggs'),
    new BestSeller('f12', 'Non-Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Egg Burji', 80, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', '2 Eggs'),
    new BestSeller('f13', 'Non-Veg', 'https://b.zmtcdn.com/data/dish_photos/396/2dbeec12a33b1d0fd94bb71ed3575396.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', 'Egg Burji', 80, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', '2 Eggs')
  ];
  ngOnInit() {
    this.getdata.getRestaurantDetails().subscribe((res) => {
      this.restDetails = res;
      console.log('Parashar Kitchen', res);
    });
  }
}
