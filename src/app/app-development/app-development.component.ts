import { ApplicationInitStatus, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-development',
  templateUrl: './app-development.component.html',
  styleUrls: ['./app-development.component.scss']
})
export class AppDevelopmentComponent implements OnInit {
[x: string]: any;
app : string = "App";
development : string = 'Development';
items=[
  {img :'assets/AppleLogo.png', content:'IOS Development', ReadMore:'Read More>'},
  {img :'assets/Monitor.png', content:'Web App',ReadMore:'Read More>'}
 ];
imgitems=[
  {img :'assets/AndroidLogo.png', content:'Android Development',ReadMore:'Read More>'},
  {img :'assets/Group 1000003346.png', content:'Hybrid-Native App',ReadMore:'Read More>'}
];
navitems=[
  {img:'assets/salary 1.png',title:'Free Cost-Analysis'},
  {img:'assets/booking 1.png',title:'Beautiful Apps'},
  {img:'assets/tap 1.png',title:'Easy-to-Use-Apps'},
  {img:'assets/smartphone 1.png',title:'Hand-Holding Approach'},
];

specialitiesItems =[
  {img:'assets/team-leader 1.png',title:'Super Skilled Developers'},
  {img:'assets/stars 1.png',title:'Superior Quality'},
  {img:'assets/best-price 1.png',title:'Affordable Prices'},
  {img:'assets/customer-service 1.png',title:'24*7 Customer Support'}
];

  constructor() { }

  ngOnInit(): void {
  

  }

}
