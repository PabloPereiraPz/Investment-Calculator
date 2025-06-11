import { Injectable } from '@angular/core';
import { DataInvestment } from './dataInvestment.model';
import { ResultsData } from './resultsData.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  resultsData?: ResultsData;

  calculateInvestmentResults(dataInvestment: DataInvestment) {
    const { initialInvestment, duration, expectedReturn, annualInvestment, taxRate } =
      dataInvestment;
    const annualData: ResultsData = [];
    let currentBalance = initialInvestment;
    let totalInvestedCapital = initialInvestment;
    let accumulatedEarnings = 0;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      
      // Calcular rendimentos do ano (juros sobre o saldo atual)
      const totalRate = (expectedReturn + taxRate) / 100;
      const yearlyEarnings = currentBalance * totalRate;
      accumulatedEarnings += yearlyEarnings;

      // Adicionar investimento anual
      totalInvestedCapital += annualInvestment;
      
      // Atualizar saldo após rendimentos e novo investimento
      currentBalance += yearlyEarnings + annualInvestment;

      annualData.push({
        year: year,
        interest: yearlyEarnings,
        valueEndOfYear: currentBalance,
        annualInvestment: annualInvestment,
        totalInterest: accumulatedEarnings,
        totalAmountInvested: totalInvestedCapital
      });
    }
    this.resultsData = annualData;
  }
}
