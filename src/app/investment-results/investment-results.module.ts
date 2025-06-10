import { NgModule } from '@angular/core';
import { InvestmentResultsComponent } from './investment-results.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InvestmentResultsComponent],
  exports: [InvestmentResultsComponent],
  imports: [CommonModule],
})
export class InvestmentResultsModule {}
