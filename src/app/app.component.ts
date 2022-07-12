import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  displayNavbar!: string;


  ngOnInit() {
    this.displayNavbar = '1';
  }

  toggleNavbar() {

    if(this.displayNavbar == '0') {
        this.displayNavbar = '1';
      //  alert(this.displayNavbar);
    } if(this.displayNavbar == '1') {
    //    alert("1 - Changing to 0");
        this.displayNavbar = '0';
    } else {
        this.displayNavbar = '1';
    }
  }
}
