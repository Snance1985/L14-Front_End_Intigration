import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coffee } from '../models/coffee';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  baseURL: string = "https://localhost:7025/api/coffee";
  tokenKey: string = "myCoffeeToken";

  constructor(private http: HttpClient) { }

  getAllCoffee(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.baseURL);
  }


  getCoffee(coffeeId: string) {

  }

  createCoffee(newCoffee: Coffee) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.post(this.baseURL, newCoffee, { headers: reqHeaders });
  }


  updateCoffee(updatedCoffee: Coffee) {

  }

  deleteCoffee(coffeeId: string) {

  }
}

