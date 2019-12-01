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
    this.Entries = this.entrySvc.entriesArray;
  }

  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
  }
}
