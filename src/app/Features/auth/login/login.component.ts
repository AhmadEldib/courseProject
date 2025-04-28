import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SharedModule } from '@app/shared';

@Component({
  selector: 'app-login',
  standalone: true, // Indicates this is a standalone component
  imports: [
      SharedModule,
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm = signal<FormGroup>({} as FormGroup);

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm.set(this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email field with required and email format validation
      password: ['', [Validators.required, Validators.minLength(8)]], // Password field with required and minimum length validation
      rememberMe: [false] // Remember me checkbox, default to false
    }));
  }

  ngOnInit(): void {
    // Component initialization logic can be added here if needed
  }

  onSubmit() {
    if (this.loginForm().valid) {
      console.log(this.loginForm().value);
    }
  }

  navigateToForgetPasswordPage() {
    this.router.navigate(['/forgot-password']);
  }

  navigateToRegisterPage() {
    this.router.navigate(['/register']);
  }
}
