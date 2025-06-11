import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { UserModule } from './user/user.module';
import { HeaderModule } from './header/header.module';
import { InvestmentResultsModule } from './investment-results/investment-results.module';

import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HeaderModule,
    UserModule,
    InvestmentResultsModule
  ],
})
export class AppModule {}
