import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VolunteersEditComponent } from './volunteers-edit/volunteers-edit.component';
import { Volunteer } from './volunteer.model';
import { MatTableDataSource } from '@angular/material/table';
import { VolunteersService } from '../shared/volunteers.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit, AfterViewInit {

  alertMessage: string;
  index: number;
  showAlert: boolean = false;

  displayedColumns: string[] = ['serialNumber', 'name', 'branch', 'batch', 'responsibility', 'contact', 'locality', 'showDetails', 'deleteDetails'];
  volunteerList = new MatTableDataSource<Volunteer>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private matDialog: MatDialog, private volunteersService: VolunteersService) { }

  ngOnInit(): void {
    this.volunteerList.data = this.volunteersService.getVolunteers();
    this.volunteersService.volunteerListChanged.subscribe(volunteers => {
      this.volunteerList.data = volunteers
    })
  }

  ngAfterViewInit() {
    this.volunteerList.sort = this.sort;
    this.volunteerList.paginator = this.paginator;
  }

  doFilter(filterValue) {
    this.volunteerList.filter = filterValue.trim().toLowerCase();
  }

  onAddVolunteer() {
    const addDialog = this.matDialog.open(VolunteersEditComponent, {
      data: {
        editMode: false
      }
    });
    addDialog.afterClosed().subscribe(volunteer => {
      if (volunteer) {
        const index = this.volunteersService.searchVolunteer(volunteer.value.mobileNumber);
        console.log(index);
        if (index !== -1){
          this.alertMessage = 'duplicate';
          this.showAlert = true;
        } else{
          this.volunteersService.addVolunteer(volunteer.value);
        }
      }
    });
  }

  onShowDetails(mobileNumber: string) {
    const index = this.volunteersService.searchVolunteer(mobileNumber);
    const editDialog = this.matDialog.open(VolunteersEditComponent, {
      data: {
        editMode: true,
        volunteer: this.volunteerList.data[index]
      }
    });
    editDialog.afterClosed().subscribe(volunteer => {
      if (volunteer) {
        this.volunteersService.editVolunteer(index, volunteer.value);
      }
    })
  }

  onDeleteButtonClicked(aadharNumber: string) {
    this.showAlert = true;
    this.alertMessage = 'volunteer';
    this.index = this.volunteersService.searchVolunteer(aadharNumber);
  }

  deleteDetails(event) {
    if (event)
      this.volunteersService.deleteVolunteer(this.index);
    this.showAlert = false;
  }

  duplicateDataMessage(){
    this.showAlert = false;
  }

}
