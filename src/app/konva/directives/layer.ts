import {
  Directive,
  ElementRef,
  AfterContentInit,
  Input,
  Component,
} from '@angular/core';
import { KonvaWrapper } from './../konva-wrapper';
import { Layer } from 'konva/lib/Layer';
import { ICircleConfig, ILayerConfig } from '../models/models';
import { Observable } from 'rxjs';

// @Directive({ selector: 'app-layer' })
@Component({
  selector: 'app-layer',
  template: `
    <div class="app-stage-container-inner">
      <app-circle
        *ngFor="let circle of circles$ | async"
        [config]="circle"
      ></app-circle>
    </div>
  `,
})
export class KonvaLayer implements AfterContentInit {
  @Input() config: ILayerConfig = { name: 'default' };
  @Input() circles$!: Observable<ICircleConfig[]>;

  private layer!: Layer;

  constructor(private el: ElementRef, private konvaWrapper: KonvaWrapper) {}

  initLayer(el: HTMLElement) {
    // console.log(this.config);
    this.layer = this.konvaWrapper.createLayer(this.config);
  }

  ngAfterContentInit(): void {
    this.initLayer(this.el.nativeElement);
  }
}
