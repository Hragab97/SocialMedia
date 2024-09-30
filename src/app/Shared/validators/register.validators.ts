import { Validators } from "@angular/forms";
import { confirmPassword } from "./confirm-password.utils";

export const signUpValidators = {
    name:[Validators.required, Validators.minLength(2), Validators.maxLength(20)],
    email:[Validators.email, Validators.required],
    password:[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'
    )],
    rePassword:[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'
    )],
    dateOfBirth:[Validators.required],
    gender:[Validators.required]
}