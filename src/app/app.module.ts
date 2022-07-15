import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPersonButtonComponent } from './components/add-person-button/add-person-button.component';
import { HeaderComponent } from './components/header/header.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { MaterialAppModule } from './shared/material/material-app.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavListComponent,
    AddPersonButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialAppModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
