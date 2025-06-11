import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from './user.component';

@NgModule({
  declarations: [User],
  exports: [User],
  imports: [CommonModule, FormsModule],
})
export class UserModule {}
