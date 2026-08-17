import type { Object3DNode } from '@react-three/fiber'
import type { BufferGeometry, Material } from 'three'

export {};

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export class MeshLineGeometry extends BufferGeometry {
    setPoints(points: number[] | Float32Array, callback?: (p: number) => number): void
  }
  export class MeshLineMaterial extends Material {
    constructor(parameters?: Record<string, unknown>)
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: Object3DNode
        import('meshline').MeshLineGeometry,
        typeof import('meshline').MeshLineGeometry
      >
      meshLineMaterial: Object3DNode
        import('meshline').MeshLineMaterial,
        typeof import('meshline').MeshLineMaterial
      >
    }
  }
}