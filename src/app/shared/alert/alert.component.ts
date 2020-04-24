import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent {

    @Input() message: string;
    @Output() studentDeleteResponse = new EventEmitter<boolean>();
    @Output() volunteerDeleteResponse = new EventEmitter<boolean>();
    @Output() duplicateData = new EventEmitter<void>();

    onYesClick() {
        if (this.message === 'student')
            this.studentDeleteResponse.emit(true);
        else if (this.message === 'volunteer')
            this.volunteerDeleteResponse.emit(true);
        else if(this.message === 'duplicate')
            this.duplicateData.emit();
    }

    onNoClick() {
        if (this.message === 'student')
            this.studentDeleteResponse.emit(false);
        else if (this.message === 'volunteer')
            this.volunteerDeleteResponse.emit(false);
        else if(this.message === 'duplicate')
            this.duplicateData.emit();
    }

}