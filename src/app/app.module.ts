import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AboutIntroComponent } from './components/about-intro/about-intro.component';
import { ContactIntroComponent } from './components/contact-intro/contact-intro.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { TeamComponent } from './components/team/team.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    HomeComponent,
    AboutPageComponent,
    AboutIntroComponent,
    ContactIntroComponent,
    ContactPageComponent,
    TeamComponent,
    TeamPageComponent,
    PrivacyComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
