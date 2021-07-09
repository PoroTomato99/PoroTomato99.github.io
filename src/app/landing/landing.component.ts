import { Component, OnInit } from '@angular/core';
import DigitalBadge from 'src/app/01JsonObject/Badges.json';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor() { }
  BadgesList : any;
  ngOnInit() {
    this.BadgesList = DigitalBadge;
  }

}
