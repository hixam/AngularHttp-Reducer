import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InterviewComponent} from './Components/interview/interview.component';
import {UsersComponent} from './Components/users/users.component';
import {VacantesComponent} from './Components/vacantes/vacantes.component';
import {FormsComponent} from "./Components/users/forms/forms.component";


const appRoutes: Routes = [
  { path: '', component: InterviewComponent },
  { path: 'users', component: UsersComponent },
  { path: 'vacants', component: VacantesComponent },
  { path: 'users/register', component: FormsComponent }

//  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
