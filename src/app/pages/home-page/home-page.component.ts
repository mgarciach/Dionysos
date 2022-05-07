import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  imgNumber: number = 1;
  interval: any;
  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.imgNumber++;
      if (this.imgNumber > 3) {
        this.imgNumber = 1;
      }
      (<HTMLImageElement>document.getElementById('img-slider')).src= `http://test.solarc.pe/imagenes/weblink${this.imgNumber}.jpg`;
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  
}
