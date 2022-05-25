import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { SectionComponent } from './components/section/section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { CustomerFilterComponent } from './components/customer-filter/customer-filter.component';
import { CustomerItemComponent } from './components/customer-item/customer-item.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { AccountPayablesPageComponent } from './pages/account-payables-page/account-payables-page.component';
import { CustomerHomePageComponent } from './pages/customer-home-page/customer-home-page.component';
import { HistoryItemComponent } from './components/history-item/history-item.component';
import { AboutusPageComponent } from './pages/aboutus-page/aboutus-page.component';
import { DistributorsPageComponent } from './pages/distributors-page/distributors-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { HistoryFilterComponent } from './components/history-filter/history-filter.component';
import { LoginService } from './service/login.service';

const initializeApp = (loginService: LoginService, http: HttpClient) => {

  return () => new Promise<void>((resolve, reject) => {
    const idCustomer = localStorage.getItem('app.idCustomer');
    const custNum = localStorage.getItem('app.custNum') as string;
    if (idCustomer && custNum) {
      loginService.setCustomer(parseInt(idCustomer) as any, custNum);
    }
    resolve();
  });
}

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductFilterComponent,
    ProductPageComponent,
    NavbarComponent,
    FooterComponent,
    SectionComponent,
    HomePageComponent,
    LoginPageComponent,
    CustomerPageComponent,
    CustomerFilterComponent,
    CustomerItemComponent,
    CustomerListComponent,
    ProfilePageComponent,
    HistoryPageComponent,
    AccountPayablesPageComponent,
    CustomerHomePageComponent,
    HistoryItemComponent,
    AboutusPageComponent,
    DistributorsPageComponent,
    ContactPageComponent,
    ProductDetailPageComponent,
    HistoryFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [LoginService, HttpClient],
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
