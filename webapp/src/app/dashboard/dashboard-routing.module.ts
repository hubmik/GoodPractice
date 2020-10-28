import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunctionsComponent } from './section/functions/functions.component';
import { LinearFunctionComponent } from './section/functions/linear-function/linear-function.component';
import { NumberSetsComponent } from './section/number-sets/number-sets.component';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  { path: 'section', component: SectionComponent },
  { path: 'section/functions', component: FunctionsComponent },
  { path: 'section/number-sets', component: NumberSetsComponent },
  { path: 'section/functions/linear-function', component: LinearFunctionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
