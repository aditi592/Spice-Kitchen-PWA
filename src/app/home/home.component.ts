import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { BestSeller } from '../best-seller';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { faHeart, faMinus } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000)
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  faHeart = faHeart;
  faMinus = faMinus;
  buttonLike = 'Like';
  panelOpenState = false;
  restDetails: any;
  selected = String;
  foodArr = [];
  foodArrFinal = [];
  selectedRem = [];
  constructor(private getdata: GetDataService, private userService: UserService, private router: Router) { }
  foods = [
    new BestSeller('f1', 'Non-Veg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4jnr-alhV_FXIHmqQXduBitfIWyvykhTVKQ&usqp=CAU', 'Egg Burji', 80, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', '2 Eggs'),
    new BestSeller('f2', 'Veg', 'https://www.manjulaskitchen.com/wp-content/uploads/sattu_paratha.jpg', 'Sattu Paratha', 100, 'Sattu Paratha is popular in Bihar. Sattu is full of nutrients like protein thus making this a healthy dish.', 'Sattu Paratha [2 Pieces] +Chokha +Salad'),
    new BestSeller('f3', 'Veg', 'https://indianambrosia.com/wp-content/uploads/2018/04/rajma-masala-2401.jpg', 'Rajma Meal', 149, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', 'Rajma+Rice+Salad+Pickle'),
    new BestSeller('f4', 'Veg', 'https://chawlascrpark.com/wp-content/uploads/2019/03/afghani-soya-chaap.jpg', 'Afghani Soya Chaap', 199, 'Soya chaap marinated in a marinade made with yogurt/curd, cream and mild spices and then cooked in a tandoor', '8 Pieces')
  ];
  breakfast = [
    new BestSeller('f1', 'Veg', 'https://cdn.cdnparenting.com/articles/2020/02/26144721/PURI-BHAJI-RECIPE.jpg', 'Medu Vada', 80, 'Many Indian households prefer puri bhaji and other traditional dishes over cereals for breakfast. Some serve it for lunch along with condiments such as Salad and Pickle.', '5 Medu Vada'),
    new BestSeller('f2', 'Non-Veg', 'https://static.toiimg.com/thumb/61688432.cms?width=680&height=512&imgsize=76196', 'Upma', 45, 'The south-Indian speciality is another wholesome option. You can savour it with sambhar, which is another anti-oxidant rich curry.', '1 Plate'),
    // tslint:disable-next-line: max-line-length
    new BestSeller('f3', 'Non-Veg', 'https://static.toiimg.com/thumb/61688428.cms?width=680&height=512&imgsize=177277', 'Paneer bhurji', 100, 'For vegetarians, completing their protein requirement can be a daunting task. Paneer is one way to fulfil this. Having this for brunch will help you stay fuller for a longer period of time.', '1 Plate'),
    new BestSeller('f4', 'Non-Veg', 'https://static.toiimg.com/thumb/61688423.cms?width=680&height=512&imgsize=117036', 'Besan cheela', 65, 'Spicy scrambled eggs made with sautéed chopped onions, tomatoes, green chilies and optional spices', '2')
  ];
  maincourse = [
    new BestSeller('f1', 'Non-Veg', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-373498_11-af7aea1.jpg?quality=90&webp=true&resize=300,272', 'Oven-baked risotto', 285, 'Risotto is a northern Italian rice dish cooked with broth until it reaches a creamy consistency', 'Risotto'),
    new BestSeller('f2', 'Non-Veg', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7234883.jpg&w=596&h=596&c=sc&poi=face&q=85', 'Sweet Potato&Venison Shepherd\'s Pie', 315, 'A hearty, warming, and comforting venison shepherd pie that perfect for opening day!', '1 Plate [ shepherd\'s pie]'),
    new BestSeller('f3', 'Non-Veg', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7159025.jpg&w=596&h=596&c=sc&poi=face&q=85', 'Vegan Korma', 145, 'Spicy and flavorful vegan korma.This mixed vegetable is deceptively decadent and secretly healthy, packed as it is with veggies in a silky sauce of coconut, ginger, garlic, cumin and turmeric.', '1 Veg Korma [Naan/Brown Rice]'),
    new BestSeller('f4', 'Non-Veg', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5367968.jpg&w=596&h=792&c=sc&poi=face&q=85', 'Lasagna', 210, 'Italian dish made of stacked layers of thin flat pasta alternating with fillings such as ragù and other vegetables, cheese, and seasonings and spices', '1 Plate Lasagne'),
    new BestSeller('f5', 'Non-Veg', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6587513.jpg', 'Soba Noodle Veggie Bowl', 165, 'Soba noodles are thin buckwheat noodles. Here, they\'re stir-fried with veggies and a savory sauce. The recipe can be easily doubled, but this is really best for one person."', '1 Bowl')
  ];
  remove(selectedItem: any) {
    this.selectedRem = selectedItem;
    console.log('Food To Remove Selected is', this.selectedRem);
    for (let i = 0; i < this.foodArrFinal.length; i++) {
      if (this.foodArrFinal[i] === selectedItem) { this.foodArrFinal.splice(i, 1); }
    }
    console.log('Khanna', this.foodArrFinal);
  }
  confirm1(selectedItem: any) {
    this.selected = selectedItem.nameofdish;
    console.log('Food Selected', this.selected);
    this.foodArr.push(this.selected);
    this.foodArrFinal = this.foodArr;
    console.log('Khanna', this.foodArrFinal);
  }
  ShowItems() {
    const x = document.getElementById('showMe');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
  ngOnInit() {
    $('#login').remove();
    $('#register').remove();
    this.getdata.getRestaurantDetails().subscribe((res) => {
      this.restDetails = res;
      console.log('Parashar Kitchen', res);
    });
  }
}
