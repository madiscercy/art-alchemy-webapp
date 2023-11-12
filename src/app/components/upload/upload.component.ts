import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  selectedImage: string | ArrayBuffer | null = null;

  constructor(private imageService: ImageService, private stepperService: StepperService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file && this.validateFile(file)) {
      this.imageService.setImage(file);
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          this.selectedImage = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  validateFile(file: File): boolean {
    const validTypes = ['image/jpeg', 'image/png'];
    const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB

    if (!validTypes.includes(file.type)) {
      alert('Only JPG and PNG files are allowed.');
      return false;
    }

    if (file.size > maxSizeInBytes) {
      alert('File must be less than 5 MB.');
      return false;
    }

    return true;
  }

  nextClick() {
    this.stepperService.setCurrentStep(3);
  }
}
