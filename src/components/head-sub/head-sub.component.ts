import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-head-sub',
  templateUrl: './head-sub.component.html',
  styleUrls: ['./head-sub.component.css']
})
export class HeadSubComponent implements OnInit {
  @Input() header: string;

  @Input() subHeader: string;
  constructor() { }

  ngOnInit() {
  }

}
