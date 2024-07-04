import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { TreatmentsComponent } from './components/treatments/treatments.component';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {EditUserComponent} from "./components/edit-user/edit-user.component";
import {AboutComponent} from "./components/about/about.component";
import {
  HealthcareProfessionalsComponent
} from "./components/healthcare-professionals/healthcare-professionals.component";
import {CommonModule} from "@angular/common";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import { DrugSearchComponent } from './components/drug-search/drug-search.component';
import { DrugDetailsDialogComponent } from './components/drug-details-dialog/drug-details-dialog.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EditUserComponent,
    AboutComponent,
    HealthcareProfessionalsComponent,
    TreatmentsComponent,
    DrugSearchComponent,
    DrugDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
