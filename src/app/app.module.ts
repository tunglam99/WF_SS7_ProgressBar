import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgpressBarComponent } from './progpress-bar/progpress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgpressBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
