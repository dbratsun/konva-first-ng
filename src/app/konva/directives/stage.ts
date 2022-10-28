import { AfterContentInit, Component, ElementRef, Input } from '@angular/core';
import { KonvaWrapper } from '../konva-wrapper';
import { IStageConfig, ILayerConfig } from '../models/models';
import { Layer } from 'konva/lib/Layer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stage',
  //   template: `
  //     <div class="app-stage-container-inner"></div>
  //     <div class="app-stage-content">
  //       <ng-content></ng-content>
  //     </div>
  //   `,
  template: `
    <div class="app-stage-container-inner"></div>
    <app-layer
      *ngFor="let layer of layers$ | async"
      [config]="layer"
    ></app-layer>
  `,
})
export class KonvaStage implements AfterContentInit {
  @Input() config: IStageConfig = {
    container: 'container',
    height: 400,
    widht: 400,
  };
  @Input() layers$!: Observable<ILayerConfig[]>;

  constructor(private el: ElementRef, private konvaWrapper: KonvaWrapper) {}

  initStage(el: HTMLElement) {
    this.konvaWrapper.createStage(this.config);
  }

  ngAfterContentInit(): void {
    const container = this.el.nativeElement.querySelector(
      'app-stage-container-inner'
    );
    this.initStage(container);
    this.layers$.subscribe((layers) => {
      console.log(layers);
    });
  }
}
