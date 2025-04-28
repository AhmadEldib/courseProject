import { Component } from '@angular/core';

import { CategoryCardComponent } from './category-card/category-card.component';

@Component({
  selector: 'app-shop-by-categories',
  standalone: true,
  imports: [
    CategoryCardComponent
  ],
  templateUrl: './shop-by-categories.component.html',
  styleUrl: './shop-by-categories.component.scss'
})
export class ShopByCategoriesComponent {

  readonly categoriesList: Array<{name: string; imageUrl: string}> = [
    { imageUrl: 'assets/Images/casual_wear.png', name: 'Casual Wear' },
    { imageUrl: 'assets/Images/western_wear.png', name: 'Western Wear' },
    { imageUrl: 'assets/Images/ethnic_wear.png', name: 'Ethnic Wear' },
    { imageUrl: 'assets/Images/kids_wear.png', name: 'Kids Wear' }
  ];
}

