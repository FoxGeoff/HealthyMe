import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hm-new-weight-entry',
  templateUrl: './new-weight-entry.component.html',
  styleUrls: ['./new-weight-entry.component.css']
})
export class NewWeightEntryComponent implements OnInit {

  @Input() showBodyFat: boolean;
  @Output() create = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  createEntry() {
    this.create.emit({id:10,date:new Date('1/4/1996'),weight:567,bodyfat:.20});
  }
}
