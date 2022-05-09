import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPayablesPageComponent } from './pages/account-payables-page/account-payables-page.component';
import { CustomerHomePageComponent } from './pages/customer-home-page/customer-home-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductPageComponent,
  },
  {
    path: 'customer',
    component: CustomerPageComponent,
    children: [
      {path: 'home', component: CustomerHomePageComponent},
      {path: 'profile', component: ProfilePageComponent},
      {path: 'history', component: HistoryPageComponent},
      {path: 'account-payables', component: AccountPayablesPageComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '**',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
