import { Component, OnInit } from '@angular/core';
import {receipemodel} from '../receipebook.model';
import {receipeService} from '../receipeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receipelist',
  templateUrl: './receipelist.component.html',
  styleUrls: ['./receipelist.component.css']
})
export class ReceipelistComponent implements OnInit {

 
  receipes: receipemodel[];
  
  constructor(private receipedata:receipeService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.receipedata.receipechange.subscribe(
      (receipe:receipemodel[])=>
      {
          this.receipes=receipe;
      })
      this.receipes=this.receipedata.getreceipes();
      console.log(this.receipes);
  }

  // onedit()
  // {
  //   this.router.navigate(['new'],{relativeTo:this.route})
  // }

}
