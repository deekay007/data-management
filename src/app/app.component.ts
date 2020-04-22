import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  open: boolean = true;

  ngOnInit(){
    if(window.innerWidth < 500)
      this.open = false;
    else  
      this.open = true;
  }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 500) {
            this.open = false;
        }else
          this.open = true;
          
    }
}
