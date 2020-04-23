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

  showAlert: boolean = false;
  index: number;

  studentSubs : Subscription;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['serialNumber', 'name', 'fathersName', 'gender', 'dob', 'contact', 'locality','showDetails', 'deleteDetails'];
  dataSource = new MatTableDataSource<Student>();

  constructor(private matDialog: MatDialog, private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.dataSource.data = this.studentsService.getStudents();
    this.studentSubs = this.studentsService.studentsListChanged.subscribe(students => {
      this.dataSource.data = students
    })
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(){
    this.studentSubs.unsubscribe();
  }

  doFilter(filterValue){
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

        this.studentsService.addStudent({
          name: student.value.name,
          category: student.value.category,
          bloodGroup: student.value.bloodGroup,
          dob: student.value.dob,
          schoolName: student.value.schoolName,
          yearOfJoining: student.value.yearOfJoining,
          aadharNumber: student.value.aadharNumber,
          gender: student.value.gender,
          sponsored: student.value.sponsored,
          sponsoredYear: student.value.sponsoredYear,
          mothersName: student.value.mothersName,
          fathersName: student.value.fathersName,
          address: student.value.address,
          locality: student.value.locality,
          pincode: student.value.pincode,
          mobileNumber: student.value.mobileNumber,
          fathersAadharNumber: student.value.fathersAadharNumber,
          imagePath: student.value.imagePath
        });
      }
    })
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

        this.studentsService.editStudent(index, {
          name: student.value.name,
          category: student.value.category,
          bloodGroup: student.value.bloodGroup,
          dob: student.value.dob,
          schoolName: student.value.schoolName,
          yearOfJoining: student.value.yearOfJoining,
          aadharNumber: student.value.aadharNumber,
          gender: student.value.gender,
          sponsored: student.value.sponsored,
          sponsoredYear: student.value.sponsoredYear,
          mothersName: student.value.mothersName,
          fathersName: student.value.fathersName,
          address: student.value.address,
          locality: student.value.locality,
          pincode: student.value.pincode,
          mobileNumber: student.value.mobileNumber,
          fathersAadharNumber: student.value.fathersAadharNumber,
          imagePath: student.value.imagePath
        });
      }
    })
  }

  onDeleteButtonClicked(aadharNumber: string){
    this.showAlert = true;
    this.index = this.studentsService.searchStudent(aadharNumber);
  }

  deleteDetails(event){
    if(event)
      this.studentsService.deleteStudent(this.index);

    this.showAlert = false;
  }

}
