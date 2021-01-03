/**
 * Login Dialog
 * 
 * Attila Németh
 * 03.01.2021
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class AttusElementsLoginDialogComponent {

  loginData: {
    username: string
    password: string
  }
  loginForm: FormGroup = null
  disabled: boolean = true
    
  constructor(private formBuilder: FormBuilder) {
    this.loginData = {
      username: null,
      password: null,
    };
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
    this.loginForm.get('username').valueChanges.subscribe((value: string) => {
      this.loginData.username = value;
    });
    this.loginForm.get('password').valueChanges.subscribe((value: string) => {
      this.loginData.password = value;
    });
    this.loginForm.statusChanges.subscribe((status: string) => {
      if (status === 'VALID') {
        this.disabled = false;
      }
      else {
        this.disabled = true;
      }
    });
  }

}
