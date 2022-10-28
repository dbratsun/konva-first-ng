import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KonvaModule } from './konva/konva.module';
import { KonvaService } from './konva/konva.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, KonvaModule],
  // providers: [KonvaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
