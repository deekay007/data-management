import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Supporter } from './supporter.model';
import { SupportersService } from '../shared/supporters.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { SupportersEditComponent } from './supporters-edit/supporters-edit.component';

@Component({
  selector: 'app-supporters',
  templateUrl: './supporters.component.html',
  styleUrls: ['./supporters.component.css']
})
export class SupportersComponent implements OnInit, AfterViewInit {

  index: number;
  showAlert: boolean = false;
  alertMessage: string ;

  displayedColumns: string[] = ['serialNumber', 'name', 'gender', 'organisationName', 'position', 'locality', 'contact', 'showDetails', 'deleteDetails'];
  supporterList = new MatTableDataSource<Supporter>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) pagination: MatPaginator;

  constructor(private supportersService: SupportersService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.supporterList.data = this.supportersService.getSupporters();
    this.supportersService.supporterListChanged.subscribe(supporters => {
      this.supporterList.data = supporters;
    })
  }

  ngAfterViewInit() {
    this.supporterList.sort = this.sort;
    this.supporterList.paginator = this.pagination;
  }

  doFilter(filterValue) {
    this.supporterList.filter = filterValue.trim().toLowerCase();
  }

  onAddSupporter() {
    const addSupporter = this.matDialog.open(SupportersEditComponent, { data : {
      editMode: false
    }});

    addSupporter.afterClosed().subscribe(supporter => {
      if(supporter){
        const index = this.supportersService.searchSupporter(supporter.value.mobileNumber);
        if(index !== -1){
          this.alertMessage = 'duplicate';
          this.showAlert = true;
        }else{
          this.supportersService.addSupporters(supporter.value);
        }
      }
    })
  }

  onShowDetails(mobileNumber: string) {
    const index = this.supportersService.searchSupporter(mobileNumber);
    const editSUpporter = this.matDialog.open(SupportersEditComponent, { data : {
      editMode: true,
      supporter: this.supporterList.data[index]
    }});
    editSUpporter.afterClosed().subscribe(supporter => {
      if(supporter){
        this.supportersService.editSupporter(index, supporter.value);
      }
    })
  }

  onDeleteButtonClicked(mobileNumber: string) {
    this.index = this.supportersService.searchSupporter(mobileNumber);
    this.alertMessage = 'supporter';
    this.showAlert = true
  }

  deleteDetails(event){
    if(event)
      this.supportersService.deleteSupporter(this.index);
    this.showAlert = false;
  }

  duplicateDataMessage(){
    this.showAlert = false;
  }

}
