import { Injectable, NgZone } from '@angular/core';
import { Stage } from 'konva/lib/Stage';
import { Layer } from 'konva/lib/Layer';
import { Circle } from 'konva/lib/shapes/Circle';
import { LiteralArrayExpr } from '@angular/compiler';
import { ILayerConfig, IStageConfig } from './models/models';
import { Observable, of } from 'rxjs';

@Injectable()
export class KonvaWrapper {
  _stage!: Stage;
  _layers: Layer[] = [];

  constructor(private _zone: NgZone) {}

  createStage(config: IStageConfig): Stage {
    this._stage = new Stage(config);
    console.log(config, this._stage);
    return this._stage;
  }

  createLayer(config: ILayerConfig): Layer {
    const layer = new Layer(config);
    this._stage.add(layer);
    console.log(config, this._stage);
    return layer;
  }

  createCircle(
    x: number,
    y: number,
    radius: number,
    fill: string,
    stroke: string,
    strokeWidth: number,
    layer: Layer
  ): Circle {
    const circle = new Circle({ x, y, radius, fill, stroke, strokeWidth });
    layer.add(circle);
    return circle;
  }

  getLayers(): Observable<Layer[]> {
    const layers = of(this._layers);
    return layers;
  }

  getLayer(name: string): Layer | undefined {
    // this._layers.find((element) => element.name === name)
    const childs = this._stage.children;
    console.log('childs: ', this._stage.getChildren());
    const child = this._stage.getChildren((item) => {
      console.log(item.name(), name);
      return item.name() === name;
    });
    console.log('child: ', child);
    return child.length > 0 ? child[0] : undefined;
  }

  // getCircles(layer: string): Observable<Circle[]> {

  // }
}
