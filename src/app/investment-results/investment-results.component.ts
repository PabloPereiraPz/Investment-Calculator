import { Component, Input } from '@angular/core';
import { DataInvestment } from '../dataInvestment.model';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input() results?: { // o interrogação tira o erro e informa que não é algo "obrigatório", mas faz sentido pelo fato de que se não for preenchido, não sera mostrado nada.
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];
}
