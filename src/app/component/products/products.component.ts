import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  productList : any;

  constructor(private _apiService: ApiService, private _cartService:CartService) {
    this.getProducts();
  }

  ngOnInit(): void {}

  getProducts() {
    this._apiService.getApi().subscribe((response: any) => {
      this.productList = response
    });
  }
  addToCart(item : any){
    this._cartService.addToCart(item)
  }
}
