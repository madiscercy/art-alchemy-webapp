import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SplashPageComponent } from './components/splash-page/splash-page.component';
import { HomeComponent } from './components/home/home.component';
import { DeviantArtComponent } from './components/deviant-art/deviant-art.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { WelcomeDialogComponent } from './components/welcome-dialog/welcome-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    HomeComponent,
    DeviantArtComponent,
    WelcomeDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
