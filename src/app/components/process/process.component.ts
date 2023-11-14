import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { StepperService } from '../../services/stepper.service';
import { ImageProcessingService } from '../../services/image-processing.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
})
export class ProcessComponent {
  selectedImage: string | ArrayBuffer | null = null;
  selectedStyle: string | null = null; // You need to retrieve this from a service or state

  isLoading: boolean = false;
  isError: boolean = false;

  constructor(
    private imageService: ImageService,
    private stepperService: StepperService,
    private imageProcessingService: ImageProcessingService
  ) {}

  ngOnInit() {
    this.retrieveImage();
    this.selectedStyle = this.imageService.getImageStyle();
  }

  retrieveImage() {
    const imageFile = this.imageService.getImage();
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          this.selectedImage = e.target.result;
        }
      };
      reader.readAsDataURL(imageFile);
    }
  }

  alchemize() {
    if (this.selectedImage && this.selectedStyle && !this.isLoading) {
      this.isLoading = true;
      this.isError = false;
      let imageData = this.selectedImage.toString();
      const base64Prefix = 'base64,';
      const base64StartIndex =
        imageData.indexOf(base64Prefix) + base64Prefix.length;
      if (base64StartIndex > base64Prefix.length - 1) {
        imageData = imageData.substring(base64StartIndex);
      }

      this.imageProcessingService
        .processImage(imageData, this.selectedStyle)
        .subscribe({
          next: (response) => {
            this.isLoading = false;
            if (response && response.newImage) {
              this.imageService.setNewImageUrl(response.newImage);
              this.stepperService.setCurrentStep(5);
              console.log('newImage: ' + response.newImage);
            } else {
              this.isError = true;
              console.error('newImage property not found in the response');
            }
          },
          error: (error) => {
            // Handle any errors
            console.error('Error processing image:', error);
            this.isLoading = false;
            this.isError = true;
          },
        });
    }
  }
}
