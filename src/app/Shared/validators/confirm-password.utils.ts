import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmPassword: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {
  const password = formGroup.get('password');
  const rePassword = formGroup.get('rePassword');
debugger
  if (!password || !rePassword) {
    return null; 
  }

  const passwordValue = password.value;
  const rePasswordValue = rePassword.value;

  if (passwordValue !== rePasswordValue) {
    return { mismatch: true };
  }
  return null;
};