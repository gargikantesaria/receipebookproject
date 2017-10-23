import { Router, Routes, RouterModule } from '@angular/router';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { NgModule } from '@angular/core';
import { ReceipebookComponent } from './receipebook/receipebook.component';
import { ReceipedetailsComponent } from './receipebook/receipedetails/receipedetails.component';
import { ReceipeeditComponent } from './receipebook/receipeedit/receipeedit.component';

const approute:Routes=[
    {path:'', redirectTo:'/receipeBook', pathMatch:'full'},
    {path:'shoppinglist', component:ShoppinglistComponent},
    {path:'receipeBook', component:ReceipebookComponent, 
    children:
    [
        {path:'new', component:ReceipeeditComponent},
        {path:':id', component:ReceipedetailsComponent},
        {path:':id/edit', component:ReceipeeditComponent}
    ]},
    
]

@NgModule({
    imports:[RouterModule.forRoot(approute)],
    exports:[RouterModule]

})
export class approutes{} 