import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

import { AttusElementsLoginDialogComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AttusElementsLoginDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
  ],
  exports: [
    AttusElementsLoginDialogComponent
  ]
})
export class AttusElementsModule { }
