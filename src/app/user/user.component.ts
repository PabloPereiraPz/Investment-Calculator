import { Component, EventEmitter, Output } from '@angular/core';
import { DataInvestment } from '../dataInvestment.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class User {
  @Output() calculate = new EventEmitter<DataInvestment>();

  initialValue = '0';
  annualInvestment = '0';
  expectedValue = '0';
  duration = '0';
  taxRate = '0';

  constructor (private InvestmentService: InvestmentService) {}

  formatCurrency(value: string): string {
    if (value === '0') return '';
    const numValue = parseFloat(value);
    return numValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  formatPercentage(value: string): string {
    if (value === '0') return '';
    return value + '%';
  }

  onSubmit() {
    if (this.isValidInput()) {
      this.InvestmentService.calculateInvestmentResults({
        initialInvestment: +this.initialValue,
        duration: +this.duration,
        expectedReturn: +this.expectedValue,
        annualInvestment: +this.annualInvestment,
        taxRate: +this.taxRate,
      });
      this.resetForm();
    }
  }

  private isValidInput(): boolean {
    return +this.initialValue > 0 &&
           +this.duration > 0 &&
           +this.expectedValue >= 0 &&
           +this.annualInvestment >= 0 &&
           +this.taxRate >= 0;
  }

  private resetForm() {
    this.initialValue = '0';
    this.duration = '0';
    this.annualInvestment = '0';
    this.expectedValue = '0';
    this.taxRate = '0';
  }
}
