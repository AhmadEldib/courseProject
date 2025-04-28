import { Component, ViewChild, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '@app/shared';
import { ManageCategoryFormComponent } from "./manage-category-form/manage-category-form.component";

@Component({
  selector: 'app-manage-categories',
  standalone: true,
  imports: [SharedModule, ManageCategoryFormComponent],
  templateUrl: './manage-categories.component.html',
  styleUrl: './manage-categories.component.scss',
})
export class ManageCategoriesComponent {

  private readonly dialogRef = inject(MatDialogRef<ManageCategoriesComponent>);

  @ViewChild('categoryForm') categoryForm!: ManageCategoryFormComponent;

  save(): void {
    if (this.categoryForm.form.valid) {
      this.categoryForm.onSubmit();
      this.dialogRef.close(this.categoryForm.form.value);
    } else {
      this.categoryForm.form.markAllAsTouched();
      console.log('Form validation failed');
    }
  }
}
