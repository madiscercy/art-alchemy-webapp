import { Component, Input } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  constructor(private stepperService: StepperService) {}

  get currentStep(): number {
    return this.stepperService.getCurrentStep();
  }
}
