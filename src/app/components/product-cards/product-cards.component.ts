import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/products.json';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css'],
})
export class ProductCardsComponent implements OnInit {
  slideConfig = {
    variableWidth: true,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    arrows: false,
    draggable: true,
  };

  products: any = (data as any).default;

  constructor() {}

  ngOnInit() {
    console.log(this.products);
  }
}
