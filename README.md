# Elements

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

[![GitHub release](https://img.shields.io/github/release/attus74/elements.svg)](https://GitHub.com/attus74/elements/releases/)

## In module.ts

```typescript
import {AttusElementsModule} from '@attus/elements';

@NgModule({
  imports: [
    AttusElementsModule,
  ],
})
```

## Login Popup

```typescript
import {MatDialog} from '@angular/material/dialog';
import {AttusElementsLoginDialogComponent} from '@attus/elements';
```
```typescript
this.dialog.open(AttusElementsLoginDialogComponent).afterClosed().subscribe((response: any) => {
  console.debug(response.username, response.password);
});
```

## Simple Confirm Dialog

```typescript
import {AttusElementsConfirmDialogComponent, ConfirmQuestion} from '@attus/elements';

const data: ConfirmQuestion = {
  question: 'Are you sure about it?',
  hint: 'It\'s your last chance to change your mind',     // Optional
  cancel: 'Nooo',                                         // Optional, Default: Cancel
  ok: 'Yes, sure',                                        // Optional, Default: OK
};
this.dialog.open(AttusConfirmDialogComponent, {
  width: '480px',
  data: data,
}).afterClosed().subscribe(result => {
  if (result === '1') {
    doSomethingConfirmed();
  }
});
```

## Angular Material Floating Action Button

A Floating Action Button. An extension for Angular Material Buttons
```
<button attus-fab-button color="accent" (click)="doSomething()">
  <mat-icon>add</mat-icon> Add New Element
</button>
```