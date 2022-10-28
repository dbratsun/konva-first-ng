import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KonvaWrapper } from './konva-wrapper';
import { KonvaStage, KonvaLayer, KonvaCircle } from './directives';

@NgModule({
  declarations: [KonvaStage, KonvaLayer, KonvaCircle],
  imports: [CommonModule],
  providers: [KonvaWrapper],
  exports: [KonvaStage, KonvaLayer, KonvaCircle],
})
export class KonvaModule {}
