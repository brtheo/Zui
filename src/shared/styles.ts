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
  transition: background-color var(--zuiTransitionValue,.125s) ease,
              filter var(--zuiTransitionValue, .125s) ease;
}
`
export const iconTransition = css`
:host([transition]) .iconTransition {
  transition: filter var(--zuiTransitionValue,.125s) ease;
}
`
export const outlined = css`
:host(.outlined) {
  --zuiBorderThickness: 2px;
  --zuiAccent: #325cff;
  --zuiForeground: var(--zuiAccent);
  --zuiPrimary: transparent;
`
export const rounded = css`
:host(.rounded) {
  --zuiRadius: .25rem;
}`

export const circle = css`
:host(.circle) {
  --zuiRadius: 200vmax;
  padding: 1.25rem
}`
                    
                    