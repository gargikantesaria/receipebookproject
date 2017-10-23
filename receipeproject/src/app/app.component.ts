import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  
  selectedlink='receipebook';
  onlyodd=false;
  odd=[1,3,5];
  even=[2,4,6];
  value;
  onclick(data:string)
  {
      this.selectedlink=data;
  }
}
