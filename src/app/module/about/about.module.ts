import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from 'src/app/components/about/about.component';
import { AboutPageComponent } from 'src/app/pages/about-page/about-page.component';


@NgModule({
  declarations: [
    AboutComponent,
    AboutPageComponent
    
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
