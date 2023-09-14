import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    
    public title = 'BlogAngular';

    constructor() { }

    ngOnInit() {
        
    }
    
    goToTop() {
        window.scroll(0,0);
    }
}
