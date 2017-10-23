import {ingredientmodel} from '../shared/ingredient.model'; 
//import {EventEmitter} from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class shoppingListService{
    ingredientsdatas=new Subject<ingredientmodel[]>();
    editingingredientsubject=new Subject<number>();

    ingredientsdata:ingredientmodel[]=[
        new ingredientmodel('apples',10),
        new ingredientmodel('banana',20)
    ]  

    getingredients()
    {
         return this.ingredientsdata.slice();
    }

    getingredientindex(index:number)
    {
        return this.ingredientsdata[index];
    }

    onaddingredients(ingredient:ingredientmodel)
    {
        this.ingredientsdata.push(ingredient);
        // this.ingredientsdatas.emit(this.ingredientsdata.slice());
        this.ingredientsdatas.next(this.ingredientsdata.slice());
    }

    addingredient(ingredient:ingredientmodel[])
    {
        // for(let ingredientd of ingredientsdata)
        // {
        //     this.onaddingredients(ingredientd);
        // }
        this.ingredientsdata.push(...ingredient);
        // this.ingredientsdatas.emit(this.ingredientsdata.slice());
        this.ingredientsdatas.next(this.ingredientsdata.slice());
        console.log(this.ingredientsdata.values);
    }

    updatedingredient(index:number,newingredient:ingredientmodel)
    {
        this.ingredientsdata[index]=newingredient;
        this.ingredientsdatas.next(this.ingredientsdata.slice());
    }

    deleteingredient(index:number)
    {
        this.ingredientsdata.splice(index,1);
        this.ingredientsdatas.next(this.ingredientsdata.slice());
    }
}