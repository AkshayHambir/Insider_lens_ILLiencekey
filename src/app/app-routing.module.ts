import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ClientsComponent } from './clients/clients.component';
import { SubscriptionComponent } from './subscription/subscription.component';



const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {path:'main',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'clients',component:ClientsComponent},
  {path:'subscription',component:SubscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
