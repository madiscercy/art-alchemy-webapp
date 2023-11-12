import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SplashPageComponent } from './components/splash-page/splash-page.component';
import { HomeComponent } from './components/home/home.component';
import { DeviantArtComponent } from './components/deviant-art/deviant-art.component';
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

const routes: Routes = [
  { path: '', component: BeginComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'style-selection', component: StyleSelectionComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    HomeComponent,
    DeviantArtComponent,
    WelcomeDialogComponent,
    MainComponent,
    StepperComponent,
    BeginComponent,
    UploadComponent,
    StyleSelectionComponent,
    ProcessComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
