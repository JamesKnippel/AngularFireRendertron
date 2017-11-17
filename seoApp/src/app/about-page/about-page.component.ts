import { Component, OnInit } from '@angular/core';
import { SeoService } from "../seo.service";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.generateMetaTags({
      title: 'about Page',
      description: 'This is definitely the about page in angular 5',
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'about-page'
    })
  }

}
