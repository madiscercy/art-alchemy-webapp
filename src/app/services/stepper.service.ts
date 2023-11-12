import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  private currentStep = 1;

  getCurrentStep(): number {
    return this.currentStep;
  }

  setCurrentStep(step: number): void {
    this.currentStep = step;
  }
}
