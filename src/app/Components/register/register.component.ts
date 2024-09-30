import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, provideNativeDateAdapter } from '@angular/material/core';
import { confirmPassword } from '../../Shared/validators/confirm-password.utils';
import { signUpValidators } from '../../Shared/validators/register.validators';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(form?.errors?.['mismatch'] && control?.touched);
  }
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatDatepickerModule, MatRadioModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[provideNativeDateAdapter()],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})

export class RegisterComponent {

  isBtnSubmit: boolean = false;

  private readonly _FormBuilder = inject(FormBuilder)

  registerform: FormGroup = this._FormBuilder.group({
    name: [null, signUpValidators.name],
    email: [null, signUpValidators.email],
    password: [null, signUpValidators.password],
    rePassword: [null, signUpValidators.rePassword],
    dateOfBirth: [null, signUpValidators.dateOfBirth],
    gender: [null, signUpValidators.gender]
  }, {
    validators: confirmPassword
  })

  matcher = new ErrorStateMatcher();
  public prints(){
    console.log(this.registerform);
  // console.log(this.nameFormControl);
  }
}
