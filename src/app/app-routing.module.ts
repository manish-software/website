import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { FlutterAppDevelopmentComponent } from './services/flutter-app-development/flutter-app-development.component';
import { SeoComponent } from './services/seo/seo.component';
import { WebDesignComponent } from './services/web-design/web-design.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'web-design', component: WebDesignComponent },
  {
    path: 'flutter-app-development',
    component: FlutterAppDevelopmentComponent,
  },
  { path: 'seo', component: SeoComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabledBlocking'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
