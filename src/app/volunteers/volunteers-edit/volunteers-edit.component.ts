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
      bloodGroup: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      batch: new FormControl('', [Validators.required]),
      branch: new FormControl('', [Validators.required]),
      companyName: new FormControl('', [Validators.required]),
      jobLocation: new FormControl('', [Validators.required]),
      responsibility: new FormControl('', [Validators.required]),
      aadharNumber: new FormControl('', [Validators.required]),
      fathersName: new FormControl('', [Validators.required]),
      mothersName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      locality: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required]),
      mobileNumber: new FormControl('', [Validators.required]),
      imagePath: new FormControl(null)
    })

    if (this.dataPassed.editMode) {
      this.setValue(this.dataPassed.volunteer);
      // console.log(this.dataPassed.volunteer);
    }
  }

  setValue(volunteer) {
    this.volunteerForm.setValue({
      name: volunteer.name,
      gender: volunteer.gender,
      bloodGroup: volunteer.bloodGroup,
      dob: volunteer.dob,
      batch: volunteer.batch,
      branch: volunteer.branch,
      companyName: volunteer.companyName,
      jobLocation: volunteer.jobLocation,
      responsibility: volunteer.responsibility,
      aadharNumber: volunteer.aadharNumber,
      fathersName: volunteer.fathersName,
      mothersName: volunteer.mothersName,
      address: volunteer.address,
      locality: volunteer.locality,
      pincode: volunteer.pincode,
      mobileNumber: volunteer.mobileNumber,
      imagePath: volunteer.imagePath
    })
  }

}
