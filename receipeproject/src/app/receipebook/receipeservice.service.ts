import {receipemodel} from './receipebook.model';
import {Injectable} from '@angular/core';
import {ingredientmodel} from '../shared/ingredient.model';
import {shoppingListService} from '../shoppinglist/shoppinglistservice.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class receipeService{
    receipechange=new Subject<receipemodel[]>();
    //selectedreceipe= new EventEmitter<receipemodel>();
    receipes:receipemodel[]=[
        
        new receipemodel('this is lasania','too much delicious','http://www.simplyrecipes.com/wp-content/uploads/2004/12/lasagna-horiz-b-2000.jpg',[new ingredientmodel('noodles',10),new ingredientmodel('cheese cube',3)]),
        new receipemodel('this is lasania','too much delicious','http://www.simplyrecipes.com/wp-content/uploads/2004/12/lasagna-horiz-b-2000.jpg',[new ingredientmodel('noodles',10),new ingredientmodel('cheese cube',3)]),
        new receipemodel('this is lasania','too much delicious','http://www.simplyrecipes.com/wp-content/uploads/2004/12/lasagna-horiz-b-2000.jpg',[new ingredientmodel('noodles',10)])
    ];
    
    
    constructor(private ingredientfromreceipe:shoppingListService){}
    getreceipes()
    {
         return this.receipes.slice();
    }

    getreceipeid(id:number)
    {
        return this.receipes[id];
    }

    addingredientstoshoppinglist(ingredient:ingredientmodel[])
    {
        this.ingredientfromreceipe.addingredient(ingredient);
    }

    addreceipe(receipe:receipemodel)
    {
        this.receipes.push(receipe);
        this.receipechange.next(this.receipes.slice());
    }

    updatereceipe(index:number,newreceipe:receipemodel)
    {
        this.receipes[index]=newreceipe;
        this.receipechange.next(this.receipes.slice());
    }

    deletereceipe(index:number)
    {
        this.receipes.splice(index,1);
        this.receipechange.next(this.receipes.slice());
    }
}