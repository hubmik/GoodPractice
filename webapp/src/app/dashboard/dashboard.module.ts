import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SectionComponent } from './section/section.component';
import { NumberSetsComponent } from './section/number-sets/number-sets.component';
import { FunctionsComponent } from './section/functions/functions.component';


@NgModule({
  declarations: [SectionComponent, NumberSetsComponent, FunctionsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
