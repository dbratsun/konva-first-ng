import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KonvaModule } from './konva/konva.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, KonvaModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
