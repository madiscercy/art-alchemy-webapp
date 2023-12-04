import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SplashPageComponent } from './components/splash-page/splash-page.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { WelcomeDialogComponent } from './components/welcome-dialog/welcome-dialog.component';
import { MainComponent } from './components/main/main.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { BeginComponent } from './components/begin/begin.component';
import { UploadComponent } from './components/upload/upload.component';
import { StyleSelectionComponent } from './components/style-selection/style-selection.component';
import { ProcessComponent } from './components/process/process.component';
import { ResultComponent } from './components/result/result.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '', component: BeginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    HomeComponent,
    WelcomeDialogComponent,
    MainComponent,
    StepperComponent,
    BeginComponent,
    UploadComponent,
    StyleSelectionComponent,
    ProcessComponent,
    ResultComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
