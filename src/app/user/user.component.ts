import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class User {
  initialValue = '0';
  annualInvestment = '0';
  expectedValue = '5';
  duration = '25';

  onSubmit() {
    console.log('Forms funcionando');
    console.log('Valor inicial: ', this.initialValue)
  }
}
