import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IBestSellerProduct } from '../best-seller';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input({required: true}) product!: IBestSellerProduct;

  isHovering = false;

  onMouseEnter(show: boolean): void {
    this.isHovering = show;
  }

}
