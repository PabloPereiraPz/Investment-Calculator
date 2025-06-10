import { NgModule } from '@angular/core';
import { Header } from './header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Header],
  exports: [Header],
  imports: [CommonModule],
})
export class HeaderModule {}
