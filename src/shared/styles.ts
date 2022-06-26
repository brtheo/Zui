import { css, unsafeCSS } from "lit"

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
}
:host(:not([disabled]):hover){
  filter: contrast(150%);
}
:host([disabled]) * {
  ${userSelectNone};
}
`
export const transition = css`
:host([transition]) {
  --useZuiEase: var(--zuiEase);
}
`
export const iconTransition = css`
:host([transition]) .iconTransition {
  --useZuiEase: var(--zuiEase);
}
`
export const outlined = css`
:host([outlined]) {
  --useZuiBorderThickness: 2px;
  --zuiAccent: #325cff;
  --useZuiForeground: var(--zuiAccent);
  --useZuiPrimary: transparent;
`
export const rounded = css`
:host([rounded]) {
  --useZuiRadius: .25rem;
}`

export const fab = css`
:host([fab]) {
  --useZuiRadius: 200vmax;
  padding: 1.25rem;
}
:host([fab=sm]) {
  padding: .75rem;
}
:host([fab=xl]) {
  padding: 1.75rem;
}`
                    
                    