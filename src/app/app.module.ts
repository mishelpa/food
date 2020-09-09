import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import {CalendarModule} from 'primeng/calendar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialButtonComponent } from './components/social-button/social-button.component';
import { LoginComponent } from './components/login/login.component';
import { FormAddressComponent } from './components/form-address/form-address.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {InputTextModule} from 'primeng/inputtext';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { FormProfileComponent } from './components/form-profile/form-profile.component';
import { FormCardComponent } from './components/form-card/form-card.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductComponent } from './components/product/product.component';
import { PageProductComponent } from './pages/page-product/page-product.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { PageResetLoginComponent } from './pages/page-reset-login/page-reset-login.component';
import { CartComponent } from './components/cart/cart.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { PaymentComponent } from './components/payment/payment.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import { NgCulqiModule } from 'ng-culqi';
import { FooterComponent } from './components/footer/footer.component';
import { CardAddressComponent } from './components/card-address/card-address.component';
import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { SearchPipe } from './pipes/search.pipe';
import { CardCardsComponent } from './components/card-cards/card-cards.component';
import { CategoryComponent } from './components/category/category.component';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    SocialButtonComponent,
    LoginComponent,
    FormAddressComponent,
    NavComponent,
    HomeComponent,
    AccountComponent,
    PageLoginComponent,
    FormProfileComponent,
    FormCardComponent,
    ListProductsComponent,
    ProductComponent,
    PageProductComponent,
    ResetPasswordComponent,
    PageResetLoginComponent,
    CartComponent,
    PaymentComponent,
    FooterComponent,
    CardAddressComponent,
    SearchPipe,
    CardCardsComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    CalendarModule,
    DialogModule,
    MatFormFieldModule,
    MatInputModule,
    InputTextModule,
    HttpClientModule,
    MatIconModule,
    MatBadgeModule,
    MatSelectModule,
    NgCulqiModule,
    MatStepperModule,
    MatCardModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
