import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  originalImage: string | ArrayBuffer | null = null;
  newImageUrl: string | null = null;

  constructor(
    private imageService: ImageService,
    private stepperService: StepperService
  ) {}

  ngOnInit() {
    this.retrieveImages();
  }

  retrieveImages() {
    const imageFile = this.imageService.getImage();
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          this.originalImage = e.target.result;
        }
      };
      reader.readAsDataURL(imageFile);
    }
    this.newImageUrl = this.imageService.getNewImageUrl();
  }

  restartProcess() {
    this.stepperService.setCurrentStep(1);
  }
}
