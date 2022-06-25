declare global {
  var __JUI__: {
    iconProvider: {
      [key: string]: string
    }
  }
}

export enum ESize {
  xs='1rem', 
  sm='1.5rem', 
  base='2rem',
  lg='2.75rem',
  xl='3.25rem',
  xxl='4rem',
  xxxl='7rem',
  xxxxl='10rem',
}
export type ESizeKeys = keyof typeof ESize

if (!globalThis.hasOwnProperty('__JUI__')) 
  globalThis.__JUI__ = { 
    iconProvider: { 
      default: 'https://raw.githubusercontent.com/Templarian/MaterialDesign-SVG/master/svg/' 
    } 
  }
globalThis.__JUI__.iconProvider.default = 'https://raw.githubusercontent.com/Templarian/MaterialDesign-SVG/master/svg/'