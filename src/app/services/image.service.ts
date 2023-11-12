import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imageFile: File | null = null;
  private imageStyle: string | null = null;

  setImage(file: File) {
    this.imageFile = file;
  }

  getImage(): File | null {
    return this.imageFile;
  }

  setImageStyle(style: string) {
    this.imageStyle = style;
  }

  getImageStyle(): string | null {
    return this.imageStyle;
  }
}

