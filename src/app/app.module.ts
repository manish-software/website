import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { LandingComponent } from './pages/landing/landing.component';
import { BackComponent } from './components/back/back.component';

import { MatCardModule as MatCardModule } from '@angular/material/card';
import { MatButtonModule as MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule as MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule as MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { environment } from 'src/environments/environment';
import { PackagefilterPipe } from './pipes/packagefilter.pipe';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import {
//   getAnalytics,
//   provideAnalytics,
//   ScreenTrackingService,
// } from '@angular/fire/analytics';
// import { getPerformance, providePerformance } from '@angular/fire/performance';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { WebDesignComponent } from './services/web-design/web-design.component';
import { MenuComponent } from './components/menu/menu.component';
import { SeoComponent } from './services/seo/seo.component';
import { ContactComponent } from './components/contact/contact.component';
import { FlutterAppDevelopmentComponent } from './services/flutter-app-development/flutter-app-development.component';

@NgModule({
  declarations: [
    AppComponent,
    TermsComponent,
    PrivacyComponent,
    LandingComponent,
    BackComponent,
    PackagefilterPipe,
    FooterComponent,
    HeaderComponent,
    WebDesignComponent,
    MenuComponent,
    SeoComponent,
    ContactComponent,
    FlutterAppDevelopmentComponent,
  ],

  imports: [
    
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatMenuModule,
    FlexLayoutModule.withConfig({
      ssrObserveBreakpoints: ['xs', 'sm', 'gt-sm'],
    }),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAnalytics(() => getAnalytics()),
    // providePerformance(() => getPerformance()),
  ],
  providers: [
    // ScreenTrackingService,
    { provide: 'googleTagManagerId', useValue: 'GTM-M2KFF7M' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
