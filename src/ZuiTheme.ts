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
  Xs='1rem', 
  Sm='1.5rem', 
  Base='2rem',
  Lg='2.75rem',
  Xl='3.25rem',
  Xxl='4rem',
  Xxxl='7rem',
  Xxxxl='10rem',
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
      font-size: 12px;
      font-family:sans-serif, 'Quicksand', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

      /* SIZING */
      ${
        // get custom properties named --zuiXs/--zuiSm etc...
        unsafeCSS(Object.keys(ESize).map( (size: string) => 
          `--zui${size}: ${ESize[size]}`
        ).join(';'))
      };

      /* COLORS */
      --zuiAccentColor: #325cff;
      /* TRANSITION */
      --zuiTransitionValue: .225s;
      --zuiEase: var(--zuiTransitionValue) ease;
      /* RADIUS */
      --zuiRadius: .25rem;
      --zuiCircle: 200vmax;
      /* PADDING */
      --zuiPaddingXs: .5rem;
      --zuiPaddingSm: .75rem;
      --zuiPadding: 1.25rem;
      --zuiPaddingXl: 1.75rem;
      /* BORDER */
      --zuiBorderThickness: 1px;
    } 
`)