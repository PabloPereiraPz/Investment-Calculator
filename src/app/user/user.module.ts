import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './user.component';
import { FormsModule, NgForm } from '@angular/forms';

@NgModule({
  declarations: [User],
  exports: [User],
  imports: [CommonModule, FormsModule],
})
export class UserModule {}
