/**
 * @file Confirm Component
 * 
 * @author Attila Németh
 * @date 11.06.2020 
 */
 
import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface ConfirmQuestion {
  question: string
  hint?: string
  cancel?: string
  ok?: string
}

@Component({
  templateUrl: './confirm.component.html',
})
export class AttusConfirmDialogComponent {
    
  constructor(public dialogRef: MatDialogRef<AttusConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmQuestion) {
    if (data.cancel === undefined) {
      data.cancel = 'Cancel';
    }    
    if (data.ok === undefined) {
      data.ok = 'OK';
    }
  }
  
}