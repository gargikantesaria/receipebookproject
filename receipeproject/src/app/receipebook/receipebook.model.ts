import {ingredientmodel} from '../shared/ingredient.model';
export class receipemodel
{
    
    public name:string;
    public description: string;
    public imgpath: string;
    public ingredient: ingredientmodel[];

constructor(name:string,desc:string,imgpath:string,ingredient: ingredientmodel[])
{
    this.name=name;
    this.description=desc;
    this.imgpath=imgpath;
    this.ingredient=ingredient;
}
}