import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { receipeService } from '../receipeservice.service';
import { receipemodel } from '../receipebook.model';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-receipeedit',
  templateUrl: './receipeedit.component.html',
  styleUrls: ['./receipeedit.component.css']
})
export class ReceipeeditComponent implements OnInit, OnDestroy {
  id:number;
  editmode=false;
  receipeform:FormGroup;
  subscription:Subscription;


  constructor(private route:ActivatedRoute, private receipeservice:receipeService,private router:Router) { }

  ngOnInit() {
    this. subscription=this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editmode = params['id'] !=null;
        this.initialiseform();
      }
    )
  }

  onsubmit()
  {
    const newreceipe= new receipemodel(this.receipeform.value['receipename'],this.receipeform.value['description'],this.receipeform.value['receipeimagepath'],this.receipeform.value['ingredients']);
    if(this.editmode)
    {
      this.receipeservice.updatereceipe(this.id,newreceipe)
    }
    else
    {
      this.receipeservice.addreceipe(newreceipe);
    }
    
    this.router.navigate(["../"],{relativeTo:this.route})

    console.log(newreceipe);
    console.log(this.receipeform.value);
  }

  initialiseform()
  {
    let receipename="";
    let receipeimgpath="";
    let description="";
    let ingredients=new FormArray([])

    if(this.editmode)
    {
      const receipedata=this.receipeservice.getreceipeid(this.id);
      receipename=receipedata.name;
      receipeimgpath=receipedata.imgpath;
      description=receipedata.description;

      if(receipedata['ingredient'])
      {
        for(let ingredient of receipedata.ingredient)
        {
          ingredients.push(
            new FormGroup(
              {
                'name':new FormControl(ingredient.name,Validators.required),
              'amount':new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
              })
          )
        }
      }
      
    }
      this.receipeform=new FormGroup({
        'receipename':new FormControl(receipename,Validators.required),
        'receipeimagepath':new FormControl(receipeimgpath,Validators.required),
        'description':new FormControl(description,Validators.required),
        'ingredients':ingredients
      })
  }

  addingredient()
  {
    (<FormArray>this.receipeform.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  oncancel()
  {
    this.router.navigate(["../"],{relativeTo:this.route}) 
  }

  ondeleteingredient(index:number)
  {
    (<FormArray>this.receipeform.get('ingredients')).removeAt(index);
  }

  ngOnDestroy()
  {
    this. subscription.unsubscribe();
  }
}
