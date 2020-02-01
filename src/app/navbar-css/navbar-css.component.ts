import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-css',
  templateUrl: './navbar-css.component.html',
  styleUrls: ['./navbar-css.component.css']
})
export class NavbarCssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }

}
