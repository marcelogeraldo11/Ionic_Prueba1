import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  async redirect(){
  
    window.location.href='/login'
    console.log("cualquier mensaje")
  }
  
}

