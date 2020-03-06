import { Component, OnInit } from '@angular/core';
import { HiService } from 'src/app/hi.service';
// import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [HiService]
})
export class CartComponent implements OnInit {

  constructor(private _hiService: HiService) { }
 products = [];
  ngOnInit() {
        this.products = this._hiService.getProducts();
        console.log(this.products);
        localStorage.setItem('products', JSON.stringify(this.products));
        sessionStorage.setItem('products', 'products.id=2')

        console.log(JSON.parse(localStorage.getItem('products.id=2')));
        console.log( sessionStorage.getItem('this.products'));
        // this.localSt.observe('key')
        //         .subscribe((value) => console.log('new value', value));
  }

}
