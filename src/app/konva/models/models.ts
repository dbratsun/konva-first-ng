export interface IStageConfig {
  container: string;
  widht: number;
  height: number;
}

export interface ICircleConfig {
  x: number;
  y: number;
  radius: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

export interface ILayerConfig {
  name: string;
}
