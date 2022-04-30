import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from "@angular/router";
//import { Tab2Page } from '../tab2/tab2.page'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor(public photoService: PhotoService, public router:Router/*, public tab2: Tab2Page*/) {}
  
  ionViewDidEnter() {
  }
  addPhotoToGallery() {

    //this.tab2.photo = true;
    this.router.navigateByUrl('tabs/New Meme');
    this.photoService.addNewToGallery();  
    
  }
}
