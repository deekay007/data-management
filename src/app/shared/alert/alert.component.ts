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

    onYesClick() {
        if (this.message === 'student')
            this.studentDeleteResponse.emit(true);
        else if (this.message === 'volunteer')
            this.volunteerDeleteResponse.emit(true);
    }

    onNoClick() {
        if (this.message === 'student')
            this.studentDeleteResponse.emit(false);
        else if (this.message === 'volunteer')
            this.volunteerDeleteResponse.emit(false);
    }

}