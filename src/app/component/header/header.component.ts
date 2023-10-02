import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public totalProducts :number =0;
  constructor(private _router:Router, private _cartService : CartService){

  }
  ngOnInit():void{
  this._cartService.getProducts().subscribe((res:any)=>{
    this.totalProducts = res.length;
  })
  }

}
