import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserModule } from './user/user.module';
import { HeaderModule } from './header/header.module';

import { AppComponent } from './app.component';
import { User } from './user/user.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, UserModule],
})
export class AppModule {}
