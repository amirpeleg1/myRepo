import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {EditUserComponent} from "./components/edit-user/edit-user.component";
import {
  HealthcareProfessionalsComponent
} from "./components/healthcare-professionals/healthcare-professionals.component";
import {AboutComponent} from "./components/about/about.component";
import {TreatmentsComponent} from "./components/treatments/treatments.component";
import {DrugSearchComponent} from "./components/drug-search/drug-search.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'edit-user', component: EditUserComponent},
  {path: 'healthcare-professionals', component: HealthcareProfessionalsComponent},
  {path: 'treatments', component: TreatmentsComponent},
  {path: 'drug-search', component: DrugSearchComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
