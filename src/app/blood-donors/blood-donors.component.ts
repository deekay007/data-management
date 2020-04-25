import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BloodDonor } from './blood-donor.model';
import { BloodDonorsService } from '../shared/blood-donors.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BloodDonorsEditComponent } from './blood-donors-edit/blood-donors-edit.component';

@Component({
  selector: 'app-blood-donors',
  templateUrl: './blood-donors.component.html',
  styleUrls: ['./blood-donors.component.css']
})
export class BloodDonorsComponent implements OnInit, AfterViewInit {

  index: number;
  alertMessage: string;
  showAlert: boolean = false;

  displayedColumns: string[] = ['serialNumber', 'name', 'gender', 'bloodGroup', 'branch', 'batch', 'contact', 'deleteDetails'];
  donorList = new MatTableDataSource<BloodDonor>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private bloodDonorService: BloodDonorsService,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.donorList.data = this.bloodDonorService.getBloodDonors();
    this.bloodDonorService.donorListChanged.subscribe(donors => {
      this.donorList.data = donors;
    })
  }

  ngAfterViewInit() {
    this.donorList.sort = this.sort;
    this.donorList.paginator = this.paginator;
  }

  doFilter(filterValue) {
    this.donorList.filter = filterValue.trim().toLowerCase();
  }

  onAddDonor() {
    const donorDialog = this.matDialog.open(BloodDonorsEditComponent);
    donorDialog.afterClosed().subscribe(donor => {
      if (donor) {
        const index = this.bloodDonorService.searchBloodDonor(donor.value.mobileNumber);
        if (index !== -1) {
          this.alertMessage = 'duplicate';
          this.showAlert = true;
        } else {
          this.bloodDonorService.addBloodDonor(donor.value)
        }
      }
    })
  }

  onDeleteButtonClicked(mobileNumber: string) {
    this.index = this.bloodDonorService.searchBloodDonor(mobileNumber);
    this.alertMessage = 'donor';
    this.showAlert = true;
  }

  deleteDonor(event) {
    if (event)
      this.bloodDonorService.deleteBloodDonor(this.index);
    this.showAlert = false;
  }

  duplicateDataMessage() {
    this.showAlert = false;
  }

}
