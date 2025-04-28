import { Component, inject } from '@angular/core';
import { signal } from '@angular/core';
import { SharedModule } from '@app/shared';
import { IProduct } from './products.interface';

import { DialogService } from '@app/Core/services';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductsComponent {

  private readonly dialogService = inject(DialogService);

  displayedColumns = ['name', 'actions'];

  products = signal<IProduct[]>([
    {id: 1, name: 'Product 1' },
    {id: 2, name: 'Product 2' }
  ]);

  get dataSources() {
    return this.products();
  }

  editProduct(product: IProduct) {
    console.log('Edit product:', product);
  }

  deleteProduct(product: IProduct) {
    console.log('Delete product:', product);
  }

  addProduct(): void {
    console.log('Add product');
  }
}
