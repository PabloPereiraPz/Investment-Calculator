import { Component } from '@angular/core';
import { InvestmentService } from './investment.service';
import { DataInvestment } from './dataInvestment.model';
import { ResultsData } from './resultsData.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
})
export class AppComponent {
  get resultsData(): ResultsData | undefined {
    return this.investmentService.resultsData;
  }

  constructor(private investmentService: InvestmentService) {}

  calculateInvestmentResults(dataInvestment: DataInvestment) {
    this.investmentService.calculateInvestmentResults(dataInvestment);
  }
}
