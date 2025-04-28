import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { SharedModule } from '@app/shared';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    SharedModule,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit {
  protected form!: FormGroup;
  private readonly fb = inject(FormBuilder);
  private readonly location = inject(Location);

  ngOnInit(): void {
    this.initForm();
  }

  protected backToLoginPage(): void {
    this.location.back();
  }

  private initForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  protected sendOTP(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}

