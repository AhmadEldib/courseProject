import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidationsService } from '@app/shared/services';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
      SharedModule,
    ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup; // Form group for managing form controls
  private readonly fb = inject(FormBuilder); // FormBuilder instance for creating reactive forms
  hidePassword = true;
  hideConfirmPassword = true;

  togglePasswordVisibility(event: Event): void {
    event.stopPropagation();
    this.hidePassword = !this.hidePassword;
  }

  toggleConfirmPasswordVisibility(event: Event): void {
    event.stopPropagation();
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  ngOnInit(): void {
    this.initForm(); // Initialize the form
  }

  private initForm(): void {
    this.form = this.fb.group(
      {
        firstName: ['', [Validators.required]], // First Name field with required validation
        lastName: ['', [Validators.required]], // Last Name field with required validation
        email: ['', [Validators.required, Validators.email]], // Email field with required and email format validation
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]], // Confirm Password field with required validation
        terms: [false, [Validators.requiredTrue]], // Terms and Conditions checkbox with required validation
      },
      {
        validators: ValidationsService.mustMatchValidator('password', 'confirmPassword')
      }
    );
  }

  // Keeping the matchPassword method in case you want to use it later
  matchPassword(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value; // Get the password value from the form
    const confirmPassword = formGroup.get('confirmPassword')?.value; // Get the confirm password value from the form

    if (password === confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors(null);
      return null;
    } else {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
  }

  register() {
    if (this.form.valid) {
      console.log(this.form.value); // Log the form value to the console
    }
  }
}
