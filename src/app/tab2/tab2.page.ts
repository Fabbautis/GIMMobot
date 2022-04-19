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

  constructor() {}

  ionViewDidEnter() {
    this.pictureID= Math.floor(Math.random()*27);
    this.text1 = 'death'
    this.text2 = 'from above'
    this.quoter = '-yo mama'
  }
}



