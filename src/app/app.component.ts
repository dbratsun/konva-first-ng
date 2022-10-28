import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KonvaWrapper } from './konva/konva-wrapper';
import { ILayerConfig } from './konva/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  layers: ILayerConfig[] = [];
  layers$!: Observable<ILayerConfig[]>;

  title = 'konva-first-ng';

  constructor(private konvaWrapper: KonvaWrapper) {
    this.layers$ = of(this.layers);
  }

  async createLayer() {
    const index = this.layers.length + 1;
    await this.layers.push({ name: `layer ${index}` });
    const layer = this.konvaWrapper.getLayer(`layer ${index}`);
    console.log('return layer: ', layer);
  }

  createCircle() {}
}
