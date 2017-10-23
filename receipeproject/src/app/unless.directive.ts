import{Directive,Input,TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector:'[appunless]'
})

export class unlessdirective
{
    @Input() set appunless(condition:boolean)
    {
        if(!condition)
            {
                this.vcref.createEmbeddedView(this.tempref);
            }
        else
            {
                this.vcref.clear();
            }
    }
    constructor(private tempref:TemplateRef<any>,private vcref:ViewContainerRef)
    {

    }
}