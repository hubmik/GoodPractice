import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SectionComponent } from './section/section.component';
import { MaturaComponent } from './matura/matura.component';
import { TryYourselfComponent } from './try-yourself/try-yourself.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'section', component: SectionComponent },
  { path: 'matura', component: MaturaComponent },
  { path: 'try-yourself', component: TryYourselfComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
