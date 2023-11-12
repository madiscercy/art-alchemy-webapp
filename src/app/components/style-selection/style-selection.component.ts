import { Component } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-style-selection',
  templateUrl: './style-selection.component.html',
  styleUrls: ['./style-selection.component.scss']
})
export class StyleSelectionComponent {
  selectedImage: string | ArrayBuffer | null = null;
  selectedStyle: string | null = null;
  styles = [
    'Impressionism',
    'Cubism',
    'Surrealism',
    'Expressionism',
    'Abstract',
    'Minimalism',
    'Futurism',
    'Art Nouveau',
    'Baroque',
    'Neo-Classicism'
  ];

  constructor(private imageService: ImageService, private stepperService : StepperService) {}

  ngOnInit() {
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

  selectStyle(style: string) {
    this.selectedStyle = style;
    this.imageService.setImageStyle(style);
  }

  goToNextStep() {
    if (this.selectedStyle) {
      this.stepperService.setCurrentStep(4);
    }
  }
}

