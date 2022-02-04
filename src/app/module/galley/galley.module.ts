import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleyRoutingModule } from './galley-routing.module';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';
import { GalleryPageComponent } from 'src/app/pages/gallery-page/gallery-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GalleryComponent,
    GalleryPageComponent
  ],
  imports: [
    CommonModule,
    GalleyRoutingModule,
    HttpClientModule
  ]
})
export class GalleyModule { }
