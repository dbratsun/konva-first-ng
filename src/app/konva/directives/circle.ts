import { AfterContentInit, Directive, Input, OnInit } from '@angular/core';
import { KonvaWrapper } from '../konva-wrapper';
import { ICircleConfig } from '../models/models';

@Directive({ selector: 'app-circle' })
export class KonvaCircle implements OnInit, AfterContentInit {
  @Input() config: ICircleConfig = { x: 100, y: 100, radius: 50 };

  constructor(private konvaWrapper: KonvaWrapper) {}

  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
