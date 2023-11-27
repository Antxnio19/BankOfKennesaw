import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { CallComponent } from './core/call/call.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './core/home/home.component';
import { SingInComponent } from './core/sing-in/sing-in.component';
import { NewUserRegistrationComponent } from './core/new-user-registration/new-user-registration.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'call', component: CallComponent},
  {path: 'signIn', component: SingInComponent},
  {path: 'about', component: AboutComponent },
  {path: 'register', component: NewUserRegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
