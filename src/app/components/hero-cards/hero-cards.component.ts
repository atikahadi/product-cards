import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/heroes.json';

@Component({
  selector: 'app-hero-cards',
  templateUrl: './hero-cards.component.html',
  styleUrls: ['./hero-cards.component.css'],
})
export class HeroCardsComponent implements OnInit {
  slideConfig = {
    // variableWidth: true,
    // centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    arrows: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: 'unslick', // destroys slick
      },
    ],
  };

  heroes: any = (data as any).default;

  constructor() {}

  ngOnInit() {
    console.log(this.heroes);
  }
}
