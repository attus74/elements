import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';

import { AttusElementsLoginDialogComponent } from './components/login/login.component';
import { AttusElementsConfirmDialogComponent } from './components/confirm/confirm.component';
import { AttusElementsFabComponent } from './components/fab/fab.component';

@NgModule({
  declarations: [
    AttusElementsLoginDialogComponent,
    AttusElementsConfirmDialogComponent,
    AttusElementsFabComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatRippleModule,
  ],
  exports: [
    AttusElementsLoginDialogComponent
  ]
})
export class AttusElementsModule { }
