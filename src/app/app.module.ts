import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'; 
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { HeaderComponent } from './navigation/header/header.component';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { BloodDonorsComponent } from './blood-donors/blood-donors.component';
import { SupportersComponent } from './supporters/supporters.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentsEditComponent } from './students/students-edit/students-edit.component';
import { AlertComponent } from './shared/alert/alert.component';
import { VolunteersEditComponent } from './volunteers/volunteers-edit/volunteers-edit.component';
import { BloodDonorsEditComponent } from './blood-donors/blood-donors-edit/blood-donors-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    StudentsComponent,
    DashboardComponent,
    VolunteersComponent,
    BloodDonorsComponent,
    SupportersComponent,
    ProfileComponent,
    StudentsEditComponent,
    AlertComponent,
    VolunteersEditComponent,
    BloodDonorsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StudentsEditComponent, VolunteersEditComponent, BloodDonorsEditComponent]
})
export class AppModule { }
