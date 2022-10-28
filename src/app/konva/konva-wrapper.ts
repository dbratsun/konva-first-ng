import { Injectable, NgZone } from '@angular/core';
import { Stage } from 'konva/lib/Stage';
import { Layer } from 'konva/lib/Layer';
import { Circle } from 'konva/lib/shapes/Circle';
import { LiteralArrayExpr } from '@angular/compiler';
import { ILayerConfig, IStageConfig } from './models/models';

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
}
