import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SectionComponent } from './section/section.component';
import { NumberCollectionsComponent } from './section/number-collections/number-collections.component';
import { FunctionsComponent } from './section/functions/functions.component';


@NgModule({
  declarations: [SectionComponent, NumberCollectionsComponent, FunctionsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
