import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Student } from '../students/student.model';

@Injectable({
    providedIn: 'root'
})
export class StudentsService {

    @Output() studentsListChanged = new EventEmitter<Student[]>();
    length: number = 0;

    constructor(private http: HttpClient) { }

    private students: Student[] = [];

    getStudents() {
        this.httpGET();
        return this.students;
    }

    editStudent(index: number, student: Student) {
        this.students[index] = student;
        this.studentsListChanged.emit(this.students);
        this.httpPOST();
    }

    addStudent(student: Student) {
        // console.log(student);
        this.students.push(student);
        this.studentsListChanged.emit(this.students);
        this.httpPOST();
    }

    searchStudent(aadharNumber: string) {
        return this.students.findIndex(x => x.aadharNumber === aadharNumber);
    }

    deleteStudent(index: number) {
        this.students.splice(index, 1);
        this.studentsListChanged.emit(this.students);
        this.httpPOST();
    }

    noOfStudents() {
        return this.length;
    }

    httpGET() {
        this.http.get<Student[]>(
            'https://data-management-d3b72.firebaseio.com/students.json'
        ).subscribe(students => {
            this.students = students;
            this.length = this.students.length;
            this.studentsListChanged.emit(this.students);
        });
    }

    httpPOST() {
        this.http.put(
            'https://data-management-d3b72.firebaseio.com/students.json',
            this.students
        ).subscribe(response => {
            console.log(response);
        });
    }
}