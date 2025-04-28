import { Component } from '@angular/core';

import { IBestSellerProduct } from './best-seller';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent {

  readonly products: IBestSellerProduct[] = [
    {
      name: 'Allen Solly',
      description: 'Women Textured Handheld Bag',
      imageUrl: 'assets/Images/adult.png',
      price: '$80.00',
      oldPrice: '$100.00'
    },
    {
      name: 'Allen Solly 2',
      description: 'Women Textured Handheld Bag',
      imageUrl: 'assets/Images/boots.png',
      price: '$80.00',
      oldPrice: '$100.00'
    },
    {
      name: 'Allen Solly',
      description: 'Women Textured Handheld Bag',
      imageUrl: 'assets/Images/woman-top.png',
      price: '$80.00',
      oldPrice: '$100.00'
    },
    {
      name: 'Allen Solly',
      description: 'Women Textured Handheld Bag',
      imageUrl: 'assets/Images/juicer_machine.png',
      price: '$80.00',
      oldPrice: '$100.00'
    }
  ];
}
