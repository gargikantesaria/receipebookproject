import {Directive,HostBinding,HostListener} from '@angular/core';

@Directive({
    selector:'[appdropdown]'
})

export class dropdowndirective{
   
    
        @HostBinding('class.open') isOpen=false;
        
        @HostListener('click')open()
        {
        this.isOpen=!this.isOpen;
        }
        // @HostListener('mouseleave')mouseout()
        // {
        // this.isOpen=false;
        // }
       
}
   
