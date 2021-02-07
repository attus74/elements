import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

import { AttusElementsLoginDialogComponent } from './components/login/login.component';
import { AttusElementsConfirmDialogComponent } from './components/confirm/confirm.component';
import { AttusElementsFabComponent } from './components/fab/fab.component';
import { AttusElementsRestoreComponent } from './components/restore/restore.component';

@NgModule({
  declarations: [
    AttusElementsLoginDialogComponent,
    AttusElementsConfirmDialogComponent,
    AttusElementsFabComponent,
    AttusElementsRestoreComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
  ],
  exports: [
    AttusElementsLoginDialogComponent,
    AttusElementsConfirmDialogComponent,
    AttusElementsFabComponent,
    AttusElementsRestoreComponent,
  ]
})
export class AttusElementsModule { }
