import { Component, EventEmitter, Output } from '@angular/core';
import { DataInvestment } from '../dataInvestment.model';

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
  expectedValue = '5';
  duration = '25';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialValue,
      duration: +this.duration,
      expectedReturn: +this.expectedValue,
      annualInvestment: +this.annualInvestment,
    });
  }
}
