import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AboutusPageComponent } from './pages/aboutus-page/aboutus-page.component';
import { AccountPayablesPageComponent } from './pages/account-payables-page/account-payables-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CustomerHomePageComponent } from './pages/customer-home-page/customer-home-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { DistributorsPageComponent } from './pages/distributors-page/distributors-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'product/:prodClass',
    component: ProductPageComponent,
  },
  {
    path: 'about-us',
    component: AboutusPageComponent,
  },
  {
    path: 'distributor',
    component: DistributorsPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'customer',
    component: CustomerPageComponent,
    children: [
      {path: 'home', component: CustomerHomePageComponent},
      {path: 'profile/:idCustomer', component: ProfilePageComponent},
      {path: 'history/:idCustomer', component: HistoryPageComponent},
      {path: 'account-payables/:idCustomer', component: AccountPayablesPageComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
