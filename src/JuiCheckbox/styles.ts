import {css, CSSResult, unsafeCSS} from 'lit'
import { userSelectNone,userSelectText } from '../shared/styles'
export const styles = css`
:host{
    --juiCheckboxSize: 1.5rem;
    --juiCheckboxThickness: 1px;
    --juiCheckboxAccentColor:  #325cff;
    --juiCheckboxFillColor: #dcdde290;
    --juiCheckboxTransitionValue: .125s;
    --juiCheckboxBorderRad: 0;
    --juiIconColor: var(--juiCheckboxAccentColor);
    width: var(--juiCheckboxSize);
    height: var(--juiCheckboxSize);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    border: var(--juiCheckboxThickness) solid var(--juiCheckboxAccentColor);
    border-radius: var(--juiCheckboxBorderRad);
    box-sizing: border-box;
    ${unsafeCSS(userSelectNone)};
}
:host([checked]) {
  background-color: var(--juiCheckboxFillColor);
}
:host([checked]) slot[name="icon"] {
  filter: opacity(1);
}
slot[name="icon"] {
  display: flex;
  filter: opacity(0);
  margin-block-start: -1px;
  margin-inline-start: -1px;
}
label {
  font-size: var(--juiCheckboxSize);
  position: absolute;
  width: max-content;
  margin-inline-start: calc( var(--juiCheckboxSize) * 2);
  transform: translateX(50%);
  line-height: var(--juiCheckboxSize);
  ${unsafeCSS(userSelectText)};
} 
`
export const flagPropsStyleMap = new Map<string, CSSResult>([
  ['transition', css`
    :host {
      transition: background-color var(--juiCheckboxTransitionValue) ease;
    }
    .iconTransition {
      transition: filter var(--juiCheckboxTransitionValue) ease;
    }  
  `],
  ['disabled', css`
    :host([disabled]) {
      filter: grayscale(1);
      cursor: not-allowed;
    }
  `],
])