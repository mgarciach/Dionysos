import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private imgServerUrl = environment.imgUrl;
  firstImgUrl = this.imgServerUrl + `/weblink1.jpg`;

  private imgNumber: number = 1;
  private interval: any;
  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.imgNumber++;
      if (this.imgNumber > 3) {
        this.imgNumber = 1;
      }
      (<HTMLImageElement>document.getElementById('img-slider')).src= this.imgServerUrl + `/weblink${this.imgNumber}.jpg`;
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  
}
