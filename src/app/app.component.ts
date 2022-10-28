import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  constructor() {
    this.layers$ = of(this.layers);
  }

  createLayer() {
    const index = this.layers.length + 1;
    this.layers.push({ name: `layer ${index}` });
  }

  createCircle() {}
}
