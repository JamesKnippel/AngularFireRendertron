import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/take";
import { SeoService } from "../seo.service";

@Component({
  selector: 'app-firebase-demo',
  templateUrl: './firebase-demo.component.html',
  styleUrls: ['./firebase-demo.component.scss']
})
export class FirebaseDemoComponent implements OnInit {

  ref: AngularFireObject<any>;
  data$: Observable<any>;

  constructor(private seo: SeoService, private db: AngularFireDatabase) { }

  ngOnInit() {
    const ref = this.db.object('demo');
    this.data$ = ref.valueChanges();

    this.data$.take(1).subscribe(data => {
      this.seo.generateMetaTags({
        title: data.title,
        description: data.description,
        slug: 'firebase-page'
      })
    })
  }

}
