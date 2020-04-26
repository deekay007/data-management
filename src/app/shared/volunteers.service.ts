import { Injectable, Output, EventEmitter } from '@angular/core';
import { Volunteer } from '../volunteers/volunteer.model';

@Injectable({
    providedIn: 'root'
})
export class VolunteersService{

    @Output() volunteerListChanged = new EventEmitter<Volunteer[]>();

    private volunteers: Volunteer[] = [
        {name: 'deepak', gender: 'male', bloodGroup: 'O+', dob: new Date(6/21/1997), batch: '2016', branch: 'cse', companyName: 'ZS Associates', jobLocation: 'Pune', responsibility: 'technical head', aadharNumber: '111122223333', mothersName: 'Meena Devi', fathersName: 'Santosh Kumar', address:'gomia', locality: 'gomia', pincode: '829111', mobileNumber: '7294880987', imagePath: 'https://previews.dropbox.com/p/thumb/AAzIY5aNuMjjFSpOlFrnmXIXSaJiVsBUfRAzDlsSgDynvgDVSGWr-qn0lpZ-TGpgl5nF09wtXOwspn7EU1Zj-UK_sYGUnO0lFrvwDJZSIlyHVDg-xiglye6f5oC3gOxzbT0X8Cf-eN284oICxe8b9cx-a6Nk2C-DIGS4ynwUYuf_qQz_34lcbUlpkSFZga8qDi0bDYQFpPVnsZPk_MOVMwUEVDggELxxr7kI6cjDnuUQxONcwZMwBzcBrCnL5BP7YMz69AhWBnVtVmt5gbed3Ya5CRTtiGsVwwz2lGQbXAN8pWHxd3YhSP5DHP6EAAmHomOuGap0Eohr5B-9quLo-eG8qK-dKGyDknryiLpdSAEwwA/p.jpeg?fv_content=true&size_mode=5'},
        {name: 'vikram', gender: 'male', bloodGroup: 'O+', dob: new Date(6/21/1997), batch: '2016', branch: 'cse', companyName: 'ZS Associates', jobLocation: 'Pune', responsibility: 'Center 4 head', aadharNumber: '222233331111', mothersName: 'Meena Devi', fathersName: 'Santosh Kumar', address:'gomia', locality: 'gomia', pincode: '829111', mobileNumber: '1234567890', imagePath: null},
        {name: 'sudhir', gender: 'male', bloodGroup: 'O+', dob: new Date(6/21/1997), batch: '2016', branch: 'cse', companyName: 'ZS Associates', jobLocation: 'Pune', responsibility: 'SPorts head', aadharNumber: '333311112222', mothersName: 'Meena Devi', fathersName: 'Santosh Kumar', address:'gomia', locality: 'gomia', pincode: '829111', mobileNumber: '4561237899', imagePath: null},
        {name: 'Neeraj', gender: 'male', bloodGroup: 'O+', dob: new Date(6/21/1997), batch: '2016', branch: 'cse', companyName: 'ZS Associates', jobLocation: 'Pune', responsibility: 'Quality Improvement head', aadharNumber: '222233334444', mothersName: 'Meena Devi', fathersName: 'Santosh Kumar', address:'gomia', locality: 'gomia', pincode: '829111', mobileNumber: '7894561233', imagePath: null},
        {name: 'sagar', gender: 'male', bloodGroup: 'O+', dob: new Date(6/21/1997), batch: '2016', branch: 'cse', companyName: 'ZS Associates', jobLocation: 'Pune', responsibility: 'Treasurer', aadharNumber: '111144443333', mothersName: 'Meena Devi', fathersName: 'Santosh Kumar', address:'gomia', locality: 'gomia', pincode: '829111', mobileNumber: '7418529633', imagePath: null}
    ]

    getVolunteers(){
        return this.volunteers;
    }

    addVolunteer(volunteer: Volunteer){
        this.volunteers.push(volunteer);
        this.volunteerListChanged.emit(this.volunteers);
    }

    editVolunteer(index: number, volunteer: Volunteer){
        this.volunteers[index] = volunteer;
        this.volunteerListChanged.emit(this.volunteers);
    }

    searchVolunteer(mobileNumber: string){
        return this.volunteers.findIndex(x => x.mobileNumber === mobileNumber);
    }

    deleteVolunteer(index: number){
        this.volunteers.splice(index, 1);
        this.volunteerListChanged.emit(this.volunteers);
    }

    noOfVolunteers(){
        return this.volunteers.length;
    }

}