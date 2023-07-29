import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Product } from './models';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products$ = new BehaviorSubject<Product[]>([]);

  constructor() { }

  getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  loadProducts(): void {
    this.products$.next([
      {
        id: 1,
        name: 'Heladera',
        description: 'lorem ipsum',
        price: 1000,
        stock: 10,
      },
      {
        id: 2,
        name: 'Estufa',
        description: 'lorem ipsum',
        price: 1000,
        stock: 10,
      },
      {
        id: 3,
        name: 'Computadora',
        description: 'lorem ipsum',
        price: 1000,
        stock: 10,
      },
    ])
  }

  create():void {
    this.products$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        // arrayActual.push({
        //   id: arrayActual.length + 1,
        //   name: 'Random name',
        //   description: 'lorem ipsum',
        //   price: 1000,
        //   stock: 10,
        // })

        this.products$.next([
          ...arrayActual,
          {
            id: arrayActual.length + 1,
            name: 'Random name',
            description: 'lorem ipsum',
            price: 1000,
            stock: 10,
          }
        ]);
      }
    })
  }

  deleteById(id: Number): void {
    this.products$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this.products$.next(
          arrayActual.filter(product => product.id !== id)
        );
      }
    })
  }
}

