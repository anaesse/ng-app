import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from 'src/app/components/team/team.component';
import { TeamPageComponent } from 'src/app/pages/team-page/team-page.component';


@NgModule({
  declarations: [
    TeamComponent,
    TeamPageComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
