/**
 * Password Restore
 * 
 * @author Attila Németh
 * @date 07.01.2021
 */

import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './restore.component.html',
})
export class AttusElementsRestoreComponent implements OnInit {

  restoreForm: FormGroup = null
  passwords: {
    password1: string
    password2: string
  }
  password1Subscription: Subscription
  password2Subscription: Subscription
    
  constructor(private formBuilder: FormBuilder,
              private passwordValidator: PasswordCompareValidator) {
    this.passwords = {
      password1: '',
      password2: '',
    };
    this.restoreForm = this.formBuilder.group({
      password1: [null, Validators.required],
      password2: [null, Validators.required],
    },
    {
      validators: [this.passwordValidator.passWordCompare()],
      updateOn: 'change',
    });
  }

  ngOnInit(): void {
    this.password1Subscription = this.restoreForm.get('password1').valueChanges.subscribe(value => {
      this.passwords.password1 = value;
    });
    this.password2Subscription = this.restoreForm.get('password2').valueChanges.subscribe(value => {
      this.passwords.password2 = value;
    });
  }

  ngOnDestroy(): void {
    this.password1Subscription.unsubscribe();
    this.password2Subscription.unsubscribe();
  }

}
 
@Injectable({ providedIn: 'root' })
class PasswordCompareValidator {
  public passWordCompare(): ValidatorFn {
    return (formGroup: FormGroup) => {
      if (formGroup.get('password1').value !== formGroup.get('password2').value) {
        return {
          passwordsNotMatch: true
        };
      }
      return null;
    };
  }
}