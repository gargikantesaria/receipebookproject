import { Component, OnInit } from '@angular/core';
import {receipeService} from './receipeservice.service';
//import {receipemodel} from './receipebook.model';
@Component({
  selector: 'app-receipebook',
  templateUrl: './receipebook.component.html',
  styleUrls: ['./receipebook.component.css'],
  
})
export class ReceipebookComponent implements OnInit {

  //receipeclick:receipemodel; 

  //constructor(private receipedata:receipeService) { }

  ngOnInit() {
    // this.receipedata.selectedreceipe.subscribe(
    //   (receipe:receipemodel)=>{
    //     this.receipeclick=receipe;
    //   }
    // );
  }

}
