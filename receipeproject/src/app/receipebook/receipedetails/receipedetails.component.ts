import { Component, OnInit } from '@angular/core';
import {receipemodel} from '../receipebook.model';
import {receipeService} from '../receipeservice.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-receipedetails',
  templateUrl: './receipedetails.component.html',
  styleUrls: ['./receipedetails.component.css']
})
export class ReceipedetailsComponent implements OnInit {

sreceipe:receipemodel; 
id:number;
  
constructor(private receipedata: receipeService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.sreceipe=this.receipedata.getreceipeid(this.id);
      }
    )
  }

  btnclick(){
    this.receipedata.addingredientstoshoppinglist(this.sreceipe.ingredient);
  }

  // onedit()
  // {
  //   this.router.navigate(['edit'],{relativeTo:this.route})
  //       else we can write
  //       this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route})
  // }

  ondelete()
  {
    this.receipedata.deletereceipe(this.id);
    console.log(this.receipedata.receipes);
    this.router.navigate(['../'],{relativeTo:this.route})
  }
}
