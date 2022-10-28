import { Injectable } from '@angular/core';
import { Circle } from 'konva/lib/shapes/Circle';
import { Stage } from 'konva/lib/Stage';

@Injectable({
  providedIn: 'root',
})
export class KonvaService {
  _stage!: Stage;

  constructor() {}

  circle(
    x: number,
    y: number,
    radius: number,
    fill: string,
    stroke: string,
    strokeWidth: number
  ): Circle {
    return new Circle({ x, y, radius, fill, stroke, strokeWidth });
  }

  public get stage() {
    if (!this._stage) {
      this.createStage('container', 400, 400);
    }
    return this._stage;
  }

  private createStage(container: string, width: number, height: number) {
    if (!this.stage) this._stage = new Stage({ container, width, height });
  }
}
