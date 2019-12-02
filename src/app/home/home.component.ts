import { Component, OnInit } from '@angular/core';
import { WeightEntriesService } from '../weight-entries.service';
import { Entry } from '../model/entry';

@Component({
  selector: 'hm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showBodyFat: boolean = true;
  Entries: Entry[];

  constructor(private entrySvc: WeightEntriesService) { }

  ngOnInit() {
    this.Entries = this.entrySvc.sortedEntries;
  }

  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
  }

  createNewEntry(entry: Entry) {
    console.log("creteNewEntry() => weight:" + entry.weight + "lbs" + "   Date:" + entry.date + "   id:" + entry.id);
    this.entrySvc.addEntry(entry);
    this.Entries = this.entrySvc.sortedEntries;
  }
}
