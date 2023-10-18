import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-confirm',
  template: `<div class="p-4">
    <h1 class="text-lg pl-1 !mb-2">{{ data.title }}</h1>
    <div class="mb-4 pl-1" *ngIf="!!data.message">{{ data.message }}</div>
    <div mat-dialog-actions class="!pb-2 flex">
    <button
    type="button"
    mat-raised-button
    color="primary"
    (click)="dialogRef.close(true)">OK</button>
    &nbsp;
    <span class="mx-2"></span>
    <button
    type="button"
    color="accent"
    mat-button
    (click)="dialogRef.close(false)">Cancel</button>
    </div>
  </div>`,
})
export class AppComfirmComponent {
  constructor(
    public dialogRef: MatDialogRef<AppComfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {}
}