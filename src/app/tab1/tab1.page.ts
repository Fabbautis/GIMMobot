import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public photoService: PhotoService, public router:Router) {}
  
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
    this.router.navigateByUrl('tabs/New Meme');
  }
}
