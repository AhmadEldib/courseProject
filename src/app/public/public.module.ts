import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    PublicComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HeaderComponent,
    FooterComponent,
  ]
})
export class PublicModule { }
