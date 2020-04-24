import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-blood-donors-edit',
  templateUrl: './blood-donors-edit.component.html',
  styleUrls: ['./blood-donors-edit.component.css']
})
export class BloodDonorsEditComponent implements OnInit {

  donorForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.donorForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      bloodGroup: new FormControl('', [Validators.required]),
      batch: new FormControl('', [Validators.required]),
      branch: new FormControl('', [Validators.required]),
      mobileNumber: new FormControl('', [Validators.required]),
    })
  }

}
