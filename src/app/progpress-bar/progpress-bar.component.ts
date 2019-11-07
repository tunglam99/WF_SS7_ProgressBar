import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progpress-bar.component.html',
  styleUrls: ['./progpress-bar.component.scss']
})
export class ProgpressBarComponent implements OnInit {
  @Input() backgroundColour = '#d9d9d9';
  @Input() progressColour = '#4CAF50';
  @Input() width = 50;
  constructor() { }

  ngOnInit() {
  }

}
