import { Component, inject } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ProductsService } from '@api/products.service';
import { Product } from '@shared/models/product.interface';
import { CartStore } from '@shared/store/shopping-card.store';
import { CarouselComponent } from '@features/carousel/carousel.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent,CarouselComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  private readonly productsvc=inject(ProductsService);
  products=this.productsvc.products;
  cartStore=inject(CartStore);

  onAddToCart(product:Product):void{
    this.cartStore.addToCart(product);
  }
}
