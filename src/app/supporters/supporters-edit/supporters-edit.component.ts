import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-supporters-edit',
  templateUrl: './supporters-edit.component.html',
  styleUrls: ['./supporters-edit.component.css']
})
export class SupportersEditComponent implements OnInit {

  supporterForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public dataPassed: any) { }

  ngOnInit(): void {
    this.supporterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      organisationName: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      locality: new FormControl('', [Validators.required]),
      joiningDate: new FormControl(null),
      mobileNumber: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.email])
    });

    if(this.dataPassed.editMode){
      this.supporterForm.setValue(this.dataPassed.supporter);
    }
  }

}
