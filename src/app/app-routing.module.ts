import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacationCalculatorComponent } from './vacation-calculator/vacation-calculator.component';

const routes: Routes = [
  { path: 'vacation-calculator', component: VacationCalculatorComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
