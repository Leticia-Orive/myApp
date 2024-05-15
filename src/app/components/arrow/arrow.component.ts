import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow',
  template: `<svg
  [ngClass]="{svg: !open, active: open}"
  width="9"
  height="6"
  viewBox="0 0 9 6"
  fill="#2c2c2c">
  <path d="M1.2505 5.07401L4.08408 2.26019L6.91767 5.07401L4.08408" fill="white"></path></svg>`,
  styleUrls: ['./arrow.component.css'],
})
export class ArrowComponent  {
  @Input() open?: boolean;
  
}
