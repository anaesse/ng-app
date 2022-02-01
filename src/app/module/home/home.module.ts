import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { ServiceComponent } from 'src/app/components/service/service.component';
import { ContactIntroComponent } from 'src/app/components/contact-intro/contact-intro.component';
import { AboutIntroComponent } from 'src/app/components/about-intro/about-intro.component';


@NgModule({
  declarations: [ 
    HomeComponent,
    HeroComponent,
    ServiceComponent,
    ContactIntroComponent,
    AboutIntroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
