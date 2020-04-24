import { Injectable, Output, EventEmitter } from '@angular/core';
import { BloodDonor } from '../blood-donors/blood-donor.model';

@Injectable({
    providedIn: 'root'
})
export class BloodDonorsService{

    @Output() donorListChanged = new EventEmitter<BloodDonor[]>();

    private donors: BloodDonor[] = [
        {name: 'deepak', gender: 'male', bloodGroup: 'O+', batch: '2016', branch: 'cse', mobileNumber: '7294880987'},
        {name: 'vikram', gender: 'male', bloodGroup: 'O+', batch: '2016', branch: 'IT', mobileNumber: '7482918091'},        
        {name: 'ajit', gender: 'male', bloodGroup: 'O+', batch: '2016', branch: 'Civil', mobileNumber: '8789901390'},
        {name: 'neeraj', gender: 'male', bloodGroup: 'O+', batch: '2016', branch: 'production', mobileNumber: '7765931997'},
        {name: 'sagar', gender: 'male', bloodGroup: 'O+', batch: '2016', branch: 'production', mobileNumber: '7549033903'},
        {name: 'sudhir', gender: 'male', bloodGroup: 'O+', batch: '2016', branch: 'chemical', mobileNumber: '9709471655'},
    ]

    getBloodDonors(){
        return this.donors;
    }

    addBloodDonor(donor: BloodDonor){
        this.donors.push(donor);
        this.donorListChanged.emit(this.donors);
    }

    editBloodDonor(index: number, donor: BloodDonor){
        this.donors[index] = donor;
        this.donorListChanged.emit(this.donors);
    }

    searchBloodDonor(mobileNumber: string){
        return this.donors.findIndex(x => x.mobileNumber === mobileNumber);
    }

    deleteBloodDonor(index: number){
        this.donors.splice(index, 1);
        this.donorListChanged.emit(this.donors);
    }

    noOfBloodDonors(){
        return this.donors.length;
    }

}