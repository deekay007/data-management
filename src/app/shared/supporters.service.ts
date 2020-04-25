import { Injectable, EventEmitter, Output } from '@angular/core';
import { Supporter } from '../supporters/supporter.model';

@Injectable({
    providedIn: 'root'
})
export class SupportersService{

    @Output() supporterListChanged = new EventEmitter<Supporter[]>();
    private supporters: Supporter[] = [
        {name: 'deepak', gender: 'male', organisationName: 'zs associates', position: 'software associate', address:'gomia', locality: 'gomia', joiningDate: new Date(6/21/2020), mobileNumber: '7294880987', emailId: 'dk1609008@gmail.com'},
        {name: 'vikram', gender: 'male', organisationName: 'sify tech', position: 'software developer', address:'godda', locality: 'godda', joiningDate: new Date(6/21/2020), mobileNumber: '1234567899', emailId: 'vikramkr@gmail.com'},
        {name: 'ajit', gender: 'male', organisationName: 'L&T', position: 'Engineer', address:'deoghar', locality: 'deoghar', joiningDate: new Date(6/21/2020), mobileNumber: '7894561237', emailId: 'ajitkr@gmail.com'},
    ];

    getSupporters(){
        return this.supporters;
    }

    addSupporters(supporter: Supporter){
        this.supporters.push(supporter);
        this.supporterListChanged.emit(this.supporters);
    }

    editSupporter(index: number, supporter: Supporter){
        this.supporters[index] = supporter;
        this.supporterListChanged.emit(this.supporters);
    }

    searchSupporter(mobileNumber: string){
        return this.supporters.findIndex(x => x.mobileNumber === mobileNumber);
    }

    deleteSupporter(index: number){
        this.supporters.splice(index, 1);
        this.supporterListChanged.emit(this.supporters);
    }

    noOfSupporters(){
        return this.supporters.length;
    }
}