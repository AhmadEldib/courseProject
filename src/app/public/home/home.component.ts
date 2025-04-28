import { Component } from '@angular/core';

import { BannerComponent } from './banner/banner.component';
import { ShopByCategoriesComponent } from './shop-by-categories/shop-by-categories.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { MonthDealsComponent } from './month-deals/month-deals.component';
import { CustomerCommentListComponent } from './customer-comment-list/customer-comment-list.component';
import { InstagramStoriesComponent } from './instagram-stories/instagram-stories.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    ShopByCategoriesComponent,
    BestSellerComponent,
    MonthDealsComponent,
    CustomerCommentListComponent,
    InstagramStoriesComponent,
    TestimonialsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
