import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import {CalendarModule} from 'primeng/calendar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
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
    FormCardComponent
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
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
