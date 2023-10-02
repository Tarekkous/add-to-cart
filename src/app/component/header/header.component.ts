import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private _router:Router){

  }
  ngOnInit():void{

  }
  goCart(){
    this._router.navigate(['cart'])
  }
  goProducts(){
    this._router.navigate(['products'])

  }
}
