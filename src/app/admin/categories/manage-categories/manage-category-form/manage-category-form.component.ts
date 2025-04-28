import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { CategoriesService } from '../../categories.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICategoryArray, createCategoty } from '@app/Shared/models/interfaces';

@Component({
  selector: 'app-manage-category-form',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './manage-category-form.component.html',
  styleUrl: './manage-category-form.component.scss',
})
export class ManageCategoryFormComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  
  private readonly fb = inject(FormBuilder);
  private readonly categoriesService = inject(CategoriesService);
  private readonly snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: this.fb.group({
        ar: ['', [Validators.required]],
        en: ['', [Validators.required]],
      }),
      description: this.fb.group({
        ar: [''],
        en: [''],
      }),
      imageURL: [null],
      slug: [null],
      createdAt: [new Date().toISOString()],
      updatedAt: [null],
      isActive: [true],
      parentID: [null],
      productCount: [0, [Validators.min(0)]],
    });
  }

  /**
   * Handle form submission to create a new category
   * This method validates the form, sends data to the categories service,
   * and provides user feedback on success or failure
   */
  async onSubmit(): Promise<void> {
    // Check if form passes all validation rules
    if (this.form.valid) {
      // Set loading state to show UI indicators
      this.loading = true;
      try {
        // Call the categories service to add the new category
        const response: ICategoryArray = await this.categoriesService.addCategories(this.form.value as createCategoty);
        console.log('Category added successfully:', response);
        // Show success notification to the user
        this.snackBar.open('Category added successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        // Reset form for a new entry
        this.form.reset();
      } catch (error: any) {
        // Log error details to console
        console.error('Error adding category:', error);
        // Show error notification to the user with specific error message
        this.snackBar.open('Error adding category: ' + error.message, 'Close', {
          duration: 5000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
      } finally {
        // Reset loading state regardless of success/failure
        this.loading = false;
      }
    } else {
      // Log invalid form state
      console.log('Form is invalid');
      // Mark all form controls as touched to display validation errors
      this.form.markAllAsTouched();
    }
  }
}
