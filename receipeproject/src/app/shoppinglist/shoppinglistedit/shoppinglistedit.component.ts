import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import {ingredientmodel} from '../../shared/ingredient.model';
import {shoppingListService} from '../shoppinglistservice.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit,OnDestroy {
  subscription:Subscription;
  editmode=false;
  edittedindex:number;
  ingredientitem:ingredientmodel;

  // @ViewChild('name')name:ElementRef;
  // @ViewChild('amount')amount:ElementRef;
  // @Output() addingredients=new EventEmitter<ingredientmodel>();
  @ViewChild('ref') shoppingform:NgForm;

  constructor(private ingredientadd:shoppingListService){}
  ngOnInit() {
    this.subscription=this.ingredientadd.editingingredientsubject.subscribe(
      (index:number)=>{
        this.edittedindex=index;
        this.editmode=true;
        this.ingredientitem=this.ingredientadd.getingredientindex(index);
        this.shoppingform.setValue({
          name:this.ingredientitem.name,
          amount:this.ingredientitem.amount
        })
      }
    )
  }

  onsubmit(form:NgForm)
  {
    const shoppingform=form.value;
    const newingredient=new ingredientmodel(shoppingform.name,shoppingform.amount);
    if(this.editmode)
    {
     this.ingredientadd.updatedingredient(this.edittedindex,newingredient) 
    }
    else{
      this.ingredientadd.onaddingredients(newingredient);
    }
    this.editmode=false;
    this.shoppingform.reset();
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

  onclear()
  {
    this.shoppingform.reset();
    this.editmode=false;
  }

  ondelete()
  {
    this.ingredientadd.deleteingredient(this.edittedindex)
    this.onclear();
  }
}
