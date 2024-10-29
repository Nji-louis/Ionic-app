import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Camera } from '@capacitor/camera';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  constructor(public photoService: PhotoService) {}
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallerry();
  }

}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
