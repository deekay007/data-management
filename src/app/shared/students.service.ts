import { Injectable, EventEmitter, Output } from '@angular/core';

import { Student } from '../students/student.model';

@Injectable({
    providedIn: 'root'
})
export class StudentsService {

    @Output() studentsListChanged = new EventEmitter<Student[]>();

    private students: Student[] = [
        { name: 'Deepak', category: 'obc', bloodGroup: 'O+', dob: new Date(), schoolName: 'dav', yearOfJoining: '2016', aadharNumber: '213412342134', gender: 'male', sponsored: 'no', sponsoredYear: '2016', mothersName: 'Meena Devi', fathersName: 'Santosh Kumar', address: 'Gomia', locality: 'gomia', pincode: '829111', mobileNumber: '7294880987', fathersAadharNumber: '111111111111', imagePath: 'https://i.pinimg.com/564x/04/bb/21/04bb2164bbfa3684118a442c17d086bf.jpg' },
        { name: 'Deepak', category: 'obc', bloodGroup: 'O+', dob: new Date(), schoolName: 'dav', yearOfJoining: '2016', aadharNumber: '213412342134', gender: 'male', sponsored: 'no', sponsoredYear: null, mothersName: 'Meena Devi', fathersName: 'Santosh Kumar', address: 'Gomia', locality: 'gomia', pincode: '829111', mobileNumber: '7294880987', fathersAadharNumber: '111111111111', imagePath: 'https://i.pinimg.com/564x/04/bb/21/04bb2164bbfa3684118a442c17d086bf.jpg' },
        { name: 'Deepak', category: 'obc', bloodGroup: 'O+', dob: new Date(), schoolName: 'dav', yearOfJoining: '2016', aadharNumber: '213412342134', gender: 'male', sponsored: 'no', sponsoredYear: null, mothersName: 'Meena Devi', fathersName: 'Santosh Kumar', address: 'Gomia', locality: 'gomia', pincode: '829111', mobileNumber: '7294880987', fathersAadharNumber: '111111111111', imagePath: 'https://i.pinimg.com/564x/04/bb/21/04bb2164bbfa3684118a442c17d086bf.jpg' },
    ]

    getStudents() {
        return this.students;
    }

    editStudent(index: number, student: Student) {
        this.students[index] = student;
        this.studentsListChanged.emit(this.students);
        console.log(student);
    }

    addStudent(student: Student) {
        console.log(student);
        this.students.push(student);

        this.studentsListChanged.emit(this.students);
    }

    deleteStudent(index: number){
        this.students.splice(index, 1);
        this.studentsListChanged.emit(this.students);

    }
}