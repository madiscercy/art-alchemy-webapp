import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SplashPageComponent } from './components/splash-page/splash-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
