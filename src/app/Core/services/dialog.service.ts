import { inject, Injectable } from '@angular/core';

import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

import { DialogSize } from '@app/Shared/enums';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private readonly dialogService = inject(MatDialog);

  private openDialog<T>(component: ComponentType<T>, config?: MatDialogConfig<any>): MatDialogRef<T, any> {
    return this.dialogService.open(component, config);
  }

  openAddDeleteDialog<T>(component: ComponentType<T>, config?: MatDialogConfig<any>, size: DialogSize = DialogSize.MEDIUM): MatDialogRef<T, any> {
    return this.openDialog(component, {
      ...config,
      panelClass: `panel-class-${size}`,
    });
  }
}
