import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { TRANSLATION_PROVIDERS, TranslateService } from './translate';

import { AppComponent } from './app.component';
import { CentralComponent } from './components/central/central.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddEventComponent } from './components/central/add-event/add-event.component';

import { TranslatePipe } from './translate/translate.pipe';

import { AccountService } from './services/account.service';
import { ErrorService } from './services/error.service';
import { AddEventService } from './services/add-event.service';


@NgModule({
  declarations: [
    AppComponent,
    CentralComponent,
    HeaderComponent,
    MenuComponent,
    AddEventComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    TRANSLATION_PROVIDERS,
    TranslateService,
    AccountService,
    ErrorService,
    AddEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
