
import { MorphState } from './constants';

export interface ParticleData {
  scatterPos: [number, number, number];
  treePos: [number, number, number];
  randomScale: number;
}

export interface OrnamentData extends ParticleData {
  type: 'sphere' | 'box' | 'light';
  color: string;
  weight: number;
}
