import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialModule } from './shared/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TokenInterceptor } from './shared/interceptors/token-interceptor';
import { ContactComponent } from './components/user/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ExitComponent } from './components/user/dialogs/exit/exit.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { CloseButtonComponent } from './shared/components/close-button/close-button.component';
import { CenterComponent } from './components/user/center/center.component';
import { NotebookComponent } from './components/user/notebook/notebook.component';
import { CenterDialogComponent } from './components/user/dialogs/center-dialog/center-dialog.component';
import { NotebookCreateComponent } from './components/user/notebook/create/notebook-create/notebook-create.component';
import { BackButtonComponent } from './shared/components/back-button/back-button.component';
import { VaccineComponent } from './components/user/vaccine/vaccine.component';
import { MonthToYearPipe } from './shared/pipes/month-to-year.pipe';
import { MonthPipe } from './shared/pipes/month.pipe';
import { PricingComponent } from './components/pricing/pricing.component';
import localeEsAr from '@angular/common/locales/es-AR';
import { NotebookDetailComponent } from './components/user/notebook/detail/notebook-detail/notebook-detail.component';
registerLocaleData(localeEsAr, 'es-Ar');

@NgModule({
  declarations: [AppComponent,
    HomeComponent,
    SignInComponent,
    HeaderComponent,
    UserComponent,
    ContactComponent,
    LoginComponent,
    ExitComponent,
    CloseButtonComponent,
    CenterComponent,
    NotebookComponent,
    CenterDialogComponent,
    NotebookCreateComponent,
    BackButtonComponent,
    VaccineComponent,
    MonthToYearPipe,
    MonthPipe,
    PricingComponent,
    NotebookDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    CommonModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    FontAwesomeModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  { provide: LOCALE_ID, useValue: 'es-AR' }],
  bootstrap: [AppComponent],
})
export class AppModule { }
