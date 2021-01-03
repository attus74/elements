import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { AttusElementsLoginDialogComponent } from './components/login/login.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [
    AttusElementsLoginDialogComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    AttusElementsLoginDialogComponent
  ]
})
export class AttusElementsModule { }
