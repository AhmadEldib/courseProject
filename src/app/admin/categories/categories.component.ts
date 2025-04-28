import { Component, signal, inject } from '@angular/core';

import { ICategory } from '../categories/categories.interface';

import { DialogService } from '@app/Core/services';
import { SharedModule } from '@app/shared';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  private readonly dialogService = inject(DialogService);

  displayedColumns = ['name', 'actions'];

  categories = signal<ICategory[]>([
    {id: 1, name: 'Category 1' },
    {id: 2, name: 'Category 2' }
  ]);

  get dataSources() {
    return this.categories();
  }

  editCategory(category: ICategory) {
    console.log('Edit product:', category);
  }

  deleteCategory(category: ICategory) {
    console.log('Delete product:', category);
  }

  addCategory(): void {
    this.dialogService.openAddDeleteDialog(ManageCategoriesComponent);
  }

}
