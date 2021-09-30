import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventBinding';

  mytext:string="";

  onType(event : Event){
    console.log(event);
    console.log("asdf");

    this.mytext = (<HTMLInputElement>event.target).value;
  }

  onclick(){
    console.log("clicked");
  }
}
