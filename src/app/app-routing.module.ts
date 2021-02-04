import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ClientsComponent } from './clients/clients.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { MainclientsubComponent } from './mainclientsub/mainclientsub.component';
import { ClientdetalisComponent } from './clientdetalis/clientdetalis.component';
import {UpdateclientComponent } from './clients/updateclient/updateclient.component';
const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {path:'main',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'clients',component:ClientsComponent},
  {path:'subscription',component:SubscriptionComponent},
  {path:'mainmenu',component:MainclientsubComponent},
  {path:'clientdetails/:id',component:ClientdetalisComponent},
  {path:'updateclient/:id',component:UpdateclientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
