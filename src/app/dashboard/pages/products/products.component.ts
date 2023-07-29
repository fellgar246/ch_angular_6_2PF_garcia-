import { Component, OnInit } from '@angular/core';
import { Product } from './models';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {
  public dataSource: Product[] = [];

  public data$: Observable<Product[]>;

  public displayedColumns = ['id', 'name', 'price', 'actions'];

  constructor(private producService: ProductService) {
    this.data$ = this.producService.getProducts();
  }

  ngOnInit(): void {
      this.producService.loadProducts();

      // this.producService.getProducts().subscribe({
      //   next: (data) => console.log('data', data)

      // })
  }

  onCreate(): void{
    this.producService.create();
  }

  onDelete(id: number): void{
    this.producService.deleteById(id);
  }
}
