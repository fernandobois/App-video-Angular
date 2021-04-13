import { Component, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore from 'swiper/core';



@Component({
  selector: 'app-swiper-example',
  template: `
    <swiper
      [slidesPerView]="1"
      [spaceBetween]="50"
      (swiper)="onSwiper($event)"
      (slideChange)="onSlideChange()"
    >
      <ng-template swiperSlide>Slide 1</ng-template>
      <ng-template swiperSlide>Slide 2</ng-template>
      <ng-template swiperSlide>Slide 3</ng-template>
    </swiper>
  `,
})



export class SwiperComponent  {

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
 