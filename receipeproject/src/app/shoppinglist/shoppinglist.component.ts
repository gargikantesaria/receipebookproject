import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {ingredientmodel} from '../shared/ingredient.model';
import {shoppingListService} from './shoppinglistservice.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
  
})
export class ShoppinglistComponent implements OnInit, OnDestroy {

  ingredients:ingredientmodel[];
  subscribeobservable:Subscription;
  // =
  // [
  //   new ingredientmodel('apples',10),
  //   new ingredientmodel('banana',20)
  // ];
  constructor(private ingredientdata:shoppingListService) { }

  ngOnInit() {
    this.ingredients=this.ingredientdata.getingredients();
    this.subscribeobservable=this.ingredientdata.ingredientsdatas.subscribe(
      (ingredient: ingredientmodel[])=>{
        this.ingredients=ingredient;
      }
    )
  }

  editingredient(index:number)
  {
    this.ingredientdata.editingingredientsubject.next(index);
  }

  // oningredientadded(ingredient:ingredientmodel)
  // {
  //   // this.ingredients.push(ingredient);
  //   this.ingredientdata.ingredientsdatas.emit(ingredient);
  // }
  ngOnDestroy()
  {
    this.subscribeobservable.unsubscribe();
  }
}
