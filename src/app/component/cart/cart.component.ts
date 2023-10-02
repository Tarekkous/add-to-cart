import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
products : any = [];
grandtotal !: number ;

constructor(private _cartService:CartService){

}
ngOnInit():void{
  this._cartService.getProducts().subscribe(res =>{
    this.products = res
    this.grandtotal = this._cartService.getTotalPrice();
  })
}
removeItem(item : any){
this._cartService.removeCartItem(item)
}
emptyCart(){
this._cartService.removeAllCart()
}


}
