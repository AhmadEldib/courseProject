import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {


  constructor() { }

  static mustMatchValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (abstractControl: AbstractControl): ValidationErrors | null => {
      const control = abstractControl.get(controlName);
      const matchingControl = abstractControl.get(matchingControlName);

      if (!control || !matchingControl) {
        return null; // Return null if controls are not found
      }

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return null; // Return null if there are already errors on the matching control but not related to mustMatch
      }

      const isMatching = control.value === matchingControl.value; // Check if values match
      const error = isMatching ? null : { mustMatch: true }; // Set error if values do not match
      matchingControl.setErrors(error); // Set error on the matching control
      return error; // Return the error object
    };
  }

}

