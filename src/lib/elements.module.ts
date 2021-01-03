import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

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
    MatButtonModule,
  ],
  exports: [
    AttusElementsLoginDialogComponent
  ]
})
export class AttusElementsModule { }
