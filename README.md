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

```
import {MatDialog} from '@angular/material/dialog';
import {AttusLoginDialogComponent} from '@attus/elements';
```
```
this.dialog.open(AttusElementsLoginDialogComponent).afterClosed().subscribe((response: any) => {
  console.debug(response.username, response.password);
});
```