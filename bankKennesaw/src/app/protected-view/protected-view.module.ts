import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeBackComponent } from './welcome-back/welcome-back.component';



@NgModule({
  declarations: [
    WelcomeBackComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WelcomeBackComponent
  ]
})
export class ProtectedViewModule { }
