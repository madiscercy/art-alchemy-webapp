import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StepperService } from 'src/app/services/stepper.service';
import { WelcomeDialogComponent } from '../welcome-dialog/welcome-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(private stepperService: StepperService, public dialog: MatDialog) {}

  ngOnInit() {
    this.dialog.open(WelcomeDialogComponent);
  }

  get currentStep(): number {
    return this.stepperService.getCurrentStep();
  }
}
