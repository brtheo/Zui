import {css, CSSResult,unsafeCSS } from "lit"

type adoptedStyleSheets = CSSStyleSheet[] | undefined
declare global {
  var __JUI__: {
    iconProvider: {
      [key: string]: string
    }
  }
  interface Document {
    adoptedStyleSheets: adoptedStyleSheets
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
const applyTheme = (appliedCSS: CSSResult) => 
  document.adoptedStyleSheets = [
    ...(document.adoptedStyleSheets || []), 
    appliedCSS.styleSheet
  ]


applyTheme(css`
  :root {   
      font-size: 14px;
      font-family:sans-serif, 'Quicksand', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

      /* SIZING */
      ${
        // get custom properties named --zui-xs/--zui-sm etc...
        unsafeCSS(Object.keys(ESize).map( (size: string) => 
          `--zui-${size}: ${ESize[size]}`
        ).join(';'))
      };

      /* COLORS */
      --zui-accent-color: #325cff;
      /* TRANSITION */
      --zui-transition-value: .225s;
      --zui-ease: var(--zui-transition-value) ease;
      /* RADIUS */
      --zui-radius: .25rem;
      --zui-circle: 200vmax;
      /* PADDING */
      --zui-padding-xxs: .25rem;
      --zui-padding-xs: .5rem;
      --zui-padding-sm: .75rem;
      --zui-padding: 1.25rem;
      --zui-padding-xl: 1.75rem;
      /* BORDER */
      --zuiBorderThickness: 1px;
    } 
`)