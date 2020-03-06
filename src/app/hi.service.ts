import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HiService {

  constructor() { }

  getUser () {
      return [
          {"id": 1, "name": "Phuc", "age": 24},
          {"id": 2, "name": "Trang", "age": 24},
          {"id": 3, "name": "Thanh", "age": 24},
          {"id": 4, "name": "Phung", "age": 26},
          {"id": 5, "name": "Binh", "age": 24},
      ]

  }

  getProducts () {
    return [
        {"id": 1, "name": "Balo", "price":18500000},
        {"id": 2, "name": "Trang", "price": 24},
        {"id": 3, "name": "Thanh", "price": 24},
        {"id": 4, "name": "Phung", "price": 26},
        {"id": 5, "name": "Binh", "price": 24},
    ]

}
}
