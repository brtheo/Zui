import {css} from 'lit'
import { userSelectNone,userSelectText } from '../shared/styles'
export const styles = css`
:host{
    --zuiCheckboxSize: 1.5rem;
    --zuiCheckboxThickness: 1px;
    --zuiCheckboxRadius: var(--useZuiRadius);
    --zuiCheckboxAccentColor:  #325cff;
    --zuiCheckboxFillColor: var(--zuiCheckboxAccentColor);
    --zuiIconColor: #d9dde9;
    --zuiIconSize: 1.5rem;
    --zuiButtonTransition: var(--useZuiTransition);
    width: var(--zuiCheckboxSize);
    height: var(--zuiCheckboxSize);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    border: var(--zuiCheckboxThickness) solid var(--zuiCheckboxAccentColor);
    border-radius: var(--zuiCheckboxRadius);
    box-sizing: border-box;
    transition: background-color var(--zuiButtonTransition),
                filter var(--zuiButtonTransition);
    ${userSelectNone};
}
:host([checked]) {
  background-color: var(--zuiCheckboxFillColor);
}
:host([checked]) zui-icon {
  filter: opacity(1);
}
zui-icon {
  filter: opacity(0);
}
label {
  font-size: var(--zuiCheckboxSize);
  position: absolute;
  width: max-content;
  margin-inline-start: calc( var(--zuiCheckboxSize) * 2);
  transform: translateX(50%);
  line-height: var(--zuiCheckboxSize);
  ${userSelectText};
} 
`