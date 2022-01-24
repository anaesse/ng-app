import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'aboutPage',
    loadChildren: () => import('./module/about/about.module').then(m => m.AboutModule)
    
  },
  {
    path: 'teamPage',
    loadChildren: () => import('./module/team/team.module').then(m => m.TeamModule)
  },
  {
    path: 'contactPage',
    loadChildren: () => import('./module/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./module/privacy/privacy.module').then(m => m.PrivacyModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./module/terms/terms.module').then(m => m.TermsModule)
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
