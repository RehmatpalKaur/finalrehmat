import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeComponent } from './college/college.component'; // Import CollegeComponent

const routes: Routes = [
  { path: 'college', component: CollegeComponent }, // Route to the CollegeComponent
  { path: '', redirectTo: '/college', pathMatch: 'full' } // Redirect to the college component by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//final
