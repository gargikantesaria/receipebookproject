import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {dropdowndirective} from '../shared/dropdown.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() linkselected=new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  linkclick(option:String)
  {
      this.linkselected.emit(option);
  }
}
