import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { VacantesComponent } from './Components/vacantes/vacantes.component';
import { UsersComponent } from './Components/users/users.component';
import { InterviewComponent } from './Components/interview/interview.component';
import {StoreModule} from '@ngrx/store';
import {interviewReducer} from './Components/interview/core/interview.reducer';
import {InterviewService} from './Components/interview/service/interview.service';
import { ClickOutsideModule } from 'ng-click-outside';
import { HeaderComponent } from './Components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { FormsComponent } from './Components/users/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    VacantesComponent,
    UsersComponent,
    InterviewComponent,
    HeaderComponent,
    FormsComponent
  ],
  imports: [
    HttpModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ClickOutsideModule,
    StoreModule.forRoot({interviewsList: interviewReducer})
  ],
  providers: [InterviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
