import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { StudentsService } from '../shared/students.service';
import { Student } from './student.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, AfterViewInit, OnDestroy {

  alertMessage: string;
  showAlert: boolean = false;
  index: number;

  studentSubs: Subscription;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['serialNumber', 'name', 'fathersName', 'gender', 'dob', 'contact', 'locality', 'showDetails', 'deleteDetails'];
  dataSource = new MatTableDataSource<Student>();

  constructor(private matDialog: MatDialog, private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.dataSource.data = this.studentsService.getStudents();
    this.studentSubs = this.studentsService.studentsListChanged.subscribe(students => {
      this.dataSource.data = students
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.studentSubs.unsubscribe();
  }

  doFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onAddStudent() {
    const addDialog = this.matDialog.open(StudentsEditComponent, {
      data: {
        editMode: false
      }
    });
    addDialog.afterClosed().subscribe(student => {
      if (student) {
        const index = this.studentsService.searchStudent(student.value.aadharNumber);
        if (index !== -1) {
          this.alertMessage = 'duplicate';
          this.showAlert = true;
        } else
          this.studentsService.addStudent(student.value);
      }
    });
  }

  onShowDetails(aadharNumber: string) {
    const index = this.studentsService.searchStudent(aadharNumber);
    const editDialog = this.matDialog.open(StudentsEditComponent, {
      data: {
        editMode: true,
        student: this.dataSource.data[index]
      }
    });
    editDialog.afterClosed().subscribe(student => {
      if (student) {
        this.studentsService.editStudent(index, student.value);
      }
    });
  }

  onDeleteButtonClicked(aadharNumber: string) {
    this.showAlert = true;
    this.alertMessage = 'student';
    this.index = this.studentsService.searchStudent(aadharNumber);
  }

  deleteDetails(event) {
    if (event)
      this.studentsService.deleteStudent(this.index);

    this.showAlert = false;
  }

  duplicateDataMessage(){
    this.showAlert = false;
  }

}
