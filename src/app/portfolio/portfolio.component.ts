import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects1 = [
    {name: 'Full Stack Campgrounds page',
      image: 'assets/images/yelpcamp.png'},
    {name: 'Full Stack Blog Application',
    image: 'assets/images/home.png'}
  ];
  constructor() {
  }

  ngOnInit() {
  }

}
