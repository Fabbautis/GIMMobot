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
    4
  ];

  constructor() {}

  ionViewDidEnter() {
    this.pictureID= Math.floor(Math.random()*30);
    this.text1 = 'death'
    this.text2 = 'from above'
    this.quoter = '-yo mama'
    
    switch (this.textboxPlacement[this.pictureID]){
      case 0:
        document.getElementById('text').classList.add('top-left');
      break;
      case 1:
        document.getElementById('text').classList.add('top-right');
      break;
      case 2:
        document.getElementById('text').classList.add('bottom-left');
      break;
      case 3:
        document.getElementById('text').classList.add('bottom-right');
      break;
      case 4:
        document.getElementById('text').classList.add('center');
      break;
      default:
        document.getElementById('text').classList.add('top-right');
    }
  }
  
}



