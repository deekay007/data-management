import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-volunteers-edit',
  templateUrl: './volunteers-edit.component.html',
  styleUrls: ['./volunteers-edit.component.css']
})
export class VolunteersEditComponent implements OnInit {

  volunteerForm: FormGroup;
  imgPreview: string = null;

  constructor(@Inject(MAT_DIALOG_DATA) public dataPassed: any) { }

  ngOnInit(): void {
    this.volunteerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      bloodGroup: new FormControl(''),
      dob: new FormControl(''),
      batch: new FormControl('', [Validators.required]),
      branch: new FormControl('', [Validators.required]),
      companyName: new FormControl(''),
      jobLocation: new FormControl(''),
      responsibility: new FormControl('', [Validators.required]),
      aadharNumber: new FormControl(''),
      fathersName: new FormControl(''),
      mothersName: new FormControl(''),
      address: new FormControl('', [Validators.required]),
      locality: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required]),
      mobileNumber: new FormControl('', [Validators.required]),
      imagePath: new FormControl(null)
    })

    if (this.dataPassed.editMode) {
      this.setValue(this.dataPassed.volunteer);
    }
  }

  setValue(volunteer) {
    this.volunteerForm.setValue(volunteer)
  }

}
