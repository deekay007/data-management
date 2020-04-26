import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css'],
})
export class StudentsEditComponent implements OnInit {

  studentForm: FormGroup;
  imgPreview: string = null;

  constructor(@Inject(MAT_DIALOG_DATA) public dataPassed: any) { }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      bloodGroup: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      schoolName: new FormControl('', [Validators.required]),
      yearOfJoining: new FormControl('', [Validators.required]),
      aadharNumber: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      sponsored: new FormControl('', [Validators.required]),
      sponsoredYear: new FormControl(null),
      address: new FormControl('', [Validators.required]),
      fathersName: new FormControl('', [Validators.required]),
      mothersName: new FormControl('', [Validators.required]),
      locality: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required]),
      mobileNumber: new FormControl('', [Validators.required]),
      fathersAadharNumber: new FormControl(''),
      imagePath: new FormControl(null)
    })

    if (this.dataPassed.editMode) {
      this.setValue(this.dataPassed.student);
      // console.log(this.dataPassed.student);
    }
  }

  setValue(student) {
    this.studentForm.setValue(student);
  }


}
