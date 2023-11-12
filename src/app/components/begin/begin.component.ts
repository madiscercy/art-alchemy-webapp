import { Component } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.scss']
})
export class BeginComponent {
  constructor(private stepperService: StepperService) {}
  
  beginClick() {
    this.stepperService.setCurrentStep(2)
   
  }
}
