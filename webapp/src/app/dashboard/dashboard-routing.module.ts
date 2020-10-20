import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunctionsComponent } from './section/functions/functions.component';
import { NumberCollectionsComponent } from './section/number-collections/number-collections.component';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  { path: 'section', component: SectionComponent },
  { path: 'section/functions', component: FunctionsComponent },
  { path: 'section/number-collections', component: NumberCollectionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
