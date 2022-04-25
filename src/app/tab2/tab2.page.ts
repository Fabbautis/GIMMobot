import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {
  pictureID: number;
  textOptions: Array<string>;
  text1: string;
  text2: string;
  quoter: string;
  placement: string = "hi";
  textboxPlacement:Array<number> = [ //0 = TL, 1 = TR, 2 = BL, 3 = BR, 4 = C
    2,
    0,
    2, 
    1,
    4,
    4,
    1, 
    4,
    3,
    4,
    1,
    2,
    3,
    2,
    0,
    4,
    0,
    0,
    0,
    2,
    3,
    1,
    4,
    2,
    0,
    3,
    1,
    4,
    3,
    3,
    4,
    3,
    2,
    3,
    1,
    2,
    4,
    0,
    4,
    1,
    0
  ];

  constructor() {
  }

  ionViewDidEnter() {
    document.getElementById("new-photo").addEventListener("click", (e:Event) => this.newImage());
    this.newImage();
  }
  newImage() {
    this.pictureID= Math.floor(Math.random()*40);
    this.text1 = 'death'
    this.text2 = 'from above'
    this.quoter = '-yo mama'
    
    switch (this.textboxPlacement[this.pictureID]){
      case 0:
        document.getElementById('text').classList.replace(this.placement, 'top-left');
        this.placement = 'top-left';
      break;
      case 1:
        document.getElementById('text').classList.replace(this.placement, 'top-right');
        this.placement = 'top-right';
      break;
      case 2:
        document.getElementById('text').classList.replace(this.placement, 'bottom-left');
        this.placement = 'bottom-left';
      break;
      case 3:
        document.getElementById('text').classList.replace(this.placement, 'bottom-right');
        this.placement = 'bottom-right';
      break;
      case 4:
        document.getElementById('text').classList.replace(this.placement, 'center');
        this.placement = 'center';
      break;
      default:
        document.getElementById('text').classList.replace(this.placement, 'top-right');
        this.placement = 'top-right';
      break;
    }
  }
  
}



