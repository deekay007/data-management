import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { SupportersComponent } from './supporters/supporters.component';
import { BloodDonorsComponent } from './blood-donors/blood-donors.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentsEditComponent } from './students/students-edit/students-edit.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'volunteers', component: VolunteersComponent },
  { path: 'supporters', component: SupportersComponent },
  { path: 'blood-donors', component: BloodDonorsComponent },
  { path: 'supporters', component: SupportersComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
