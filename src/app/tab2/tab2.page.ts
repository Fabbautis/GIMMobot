import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {
  photo: boolean = false;
  pictureID: number;
  text1: string;
  text2: string;
  text3: string;
  quoter: string;

  textOptions1: Array<string> =[
    "Did you know ",
    "Rule 1: ",
    "When Ellertson walks in, ",
    "Failure is ",
    "The GIMM credo: ",
    "When its midnight ",
    "As a wise rubber duck once said: ",
    "The most important thing in GIMM: "
  ];
  textOptions2: Array<string> = [
    "your creativity ",
    "a videogame lamp that uses real electricity ",
    "your project that didn't finish uploading ",
    "a 360 video ",
    "a first person shooter ",
    "a painting collection ",
    "GIMM ", 
    "finishing your game ",
    "failure ",
    "code that never works "
  ];
  textOptions3: Array<string> = [
    "can create greatness",
    "is never ending",
    "builds character",
    "becomes reality",
    "is a positive force",
    "is the answer",
    "is always the answer",
    "is a conspiracy",
    "is a choice",
    "means more code"
  ];
  quoterOptions: Array<string> = [
    "- Ellertson",
    "- Ted",
    "- Amod",
    "- Dan",
    "- Karen",
    "- Jack",
    "- Jeanne",
    "- Griselda",
    "- Amanda"
  ];
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
    0,
    4,
    2,
  ];
  path:string = '../../assets/pictures/'
  picToShow: string = '0.jpg';

  constructor(public photoService: PhotoService) {
  }

  ionViewDidEnter() {
    document.getElementById("new-photo").addEventListener("click", (e:Event) => this.newImageButton());
  }
  newImageButton() {
    if (this.photo){
      this.path = '';
      this.picToShow = 'photo.webViewPath'
      this.photo = false;
    } else {
      this.path = '../../assets/pictures/'
      this.pictureID= Math.floor(Math.random()*40);
      this.picToShow = this.pictureID + '.jpg';
    }
    console.log(document.getElementById('image'));
    this.newTextbox();
  }  
  newImagePhoto(){
    this.path = ''
    this.newTextbox();
    console.log('hi')
  }

  newTextbox(){
    this.text1 =  this.textOptions1[Math.floor(Math.random()*this.textOptions1.length)];
    this.text2 = this.textOptions2[Math.floor(Math.random()*this.textOptions2.length)];
    this.text3 = this.textOptions3[Math.floor(Math.random()*this.textOptions3.length)];
    this.quoter = this.quoterOptions[Math.floor(Math.random()*this.quoterOptions.length)];
    if (this.text1 == 'When Ellertson walks in, ' && this.quoter == "- Ellertson"){
      this.text1 = 'When I walk in, '
    }
    
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



