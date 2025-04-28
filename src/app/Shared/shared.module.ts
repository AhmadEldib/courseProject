import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { TranslateModule } from '@ngx-translate/core';

const modules = [
  CommonModule, ReactiveFormsModule, FormsModule, MaterialModule, TranslateModule
]

@NgModule({
  imports: modules,
  exports: modules,

})
export class SharedModule {}
