import { css, unsafeCSS } from "lit"
import { ESize } from "../ZuiTheme"

export const userSelectNone = unsafeCSS`-moz-user-select: none;
                    -webkit-user-select: none;
                    -ms-user-select: none;
                    user-select: none`
export const userSelectText = unsafeCSS`-moz-user-select: text;
                    -webkit-user-select: text;
                    -ms-user-select: text;
                    user-select: text`
                    
export const disabled = css`
:host([disabled]) {
  filter: grayscale(1);
  cursor: not-allowed;
  box-shadow: none;
  outline: unset;
}
:host(:not([disabled]):hover){
  filter: contrast(110%);
}
:host([disabled]) * {
  ${userSelectNone};
}`

export const transition = css`
:host([transition]) {
  --useZuiTransition: var(--zuiEase);
}`

export const outlined = css`
:host([outlined]) {
  --useZuiBorderThickness: 2px;
  --zuiAccent: #325cff;
  --useZuiForeground: var(--zuiAccent);
  --useZuiPrimary: #fefefe;
}`

export const rounded = css`
:host([rounded]) {
  --useZuiRadius: var(--zuiRadius);
}`

export const fab = css`
:host([fab]) {
  --useZuiRadius: var(--zuiCircle);
  --useZuiPadding: var(--zuiPadding);
  box-shadow: 0px 2px 10px -1px black;
}
:host([fab=sm]) {
  --useZuiPadding: var(--zuiPaddingSm);
}
:host([fab=xl]) {
  --useZuiPadding: var(--zuiPaddingXl);
}`

export const focused = css`
:host(:not([disabled]):hover:focus-within), :host(:not([disabled]):focus-within) {
  filter: brightness(110%);
  outline: none;
}
:host([outlined]:not([disabled]):hover:focus-within),
:host([outlined]:not([disabled]):focus-within) {
  filter: brightness(90%);
}
:host(:not([disabled]):focus) {
  outline-width: 2px;
  outline-style: solid;
  outline-color: red;
  outline-offset: 2px;
}`  

export const sizingFor = (ruleNames: string[]) => css`
${
  unsafeCSS(Object.keys(ESize).map<string>( size => 
    ruleNames.map<string>( ruleName => `
      :host([${size}]) {
        ${ruleName}: var(--zui${size});
      }
    `).join('')
  ).join(''))
};
`

