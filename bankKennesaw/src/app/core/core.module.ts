import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CallComponent } from './call/call.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CallComponent,
    HomeComponent,
    AboutComponent,
    SingInComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CallComponent,
    HomeComponent,
    AboutComponent,
    SingInComponent
  ]
})
export class CoreModule { }
