import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isCollapsed = true;
  //our routes.
  dashboard = '/';
  about = '/';
  contact = '/';

  activeLang = "";

  constructor() {
  }



}
