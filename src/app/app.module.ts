import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { HeroCardsComponent } from './components/hero-cards/hero-cards.component';

@NgModule({
  declarations: [AppComponent, ProductCardsComponent, HeroCardsComponent],
  imports: [BrowserModule, AppRoutingModule, SlickCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
