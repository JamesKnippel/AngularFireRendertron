import { Component, OnInit } from '@angular/core';
import { SeoService } from "../seo.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.generateMetaTags({
      title: 'Home Page',
      description: 'This is definitely the home page in angular 5',
      image: 'https://instafire-app.firebaseapp.com/assets/camel.jpeg'
    })
  }

}
