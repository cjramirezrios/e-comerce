import { CurrencyPipe, SlicePipe } from '@angular/common';
import { Component, EventEmitter, Output, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@shared/models/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe,SlicePipe,RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Output() addToCartEvent=new EventEmitter<Product>();
  product=input.required<Product>();

  onAddtoCart():void{
    this.addToCartEvent.emit(this.product());
  }

}
