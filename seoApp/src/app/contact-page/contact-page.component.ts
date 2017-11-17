import { Component, OnInit } from '@angular/core';
import { SeoService } from "../seo.service";
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.generateMetaTags({
      title: 'Contact Page',
      description: 'This is definitely the Contact-Page in angular 5',
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'contact-page'
    })
  }

}
