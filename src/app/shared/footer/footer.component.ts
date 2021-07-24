import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Links from 'src/app/01JsonObject/SocialLink.json';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test : Date = new Date();

    constructor(private router: Router ) {}
    SocialLinks:any;
    ngOnInit() {
      this.SocialLinks = Links;

    }
    getPath(){
      return this.router.url;
    }
}
