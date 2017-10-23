import { Component, OnInit,Input} from '@angular/core';
import {receipemodel} from '../../receipebook.model';
import { ActivatedRoute, Router } from '@angular/router';
// import {receipeService} from '../../receipeservice.service';
@Component({
  selector: 'app-receipeitem',
  templateUrl: './receipeitem.component.html',
  styleUrls: ['./receipeitem.component.css']
})
export class ReceipeitemComponent implements OnInit {

  @Input() receipe: receipemodel;
  @Input() receipeid:number;
  
  // constructor( private receipedata:receipeService) { }
  constructor(private route:Router){}

  ngOnInit() {
  }

  // receipeclick()
  // {
  //     this.receipedata.selectedreceipe.emit(this.receipe);
  // }

}
