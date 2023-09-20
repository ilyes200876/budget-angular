import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransactionComponent,
    HeaderComponent,
    TransactionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
