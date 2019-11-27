import { Component } from '@angular/core';
import { WeightEntriesService } from './weight-entries.service';
import { Entry } from './model/entry';


@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Entries: Entry[];

  constructor(private entrySvc: WeightEntriesService) { }

  ngOnInit() {
    this.Entries = this.entrySvc.entriesArray;
  }

}
