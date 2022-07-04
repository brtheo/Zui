import {css} from 'lit'
import { userSelectNone,userSelectText } from '../../shared/styles'
export const styles = css`
:host{
    --zuiCheckboxSize: var(--zuiSm);
    --zuiCheckboxThickness: 1px;
    --zuiCheckboxRadius: var(--useZuiRadius);
    --zuiCheckboxAccentColor:  var(--zuiAccentColor);
    --zuiCheckboxFillColor: var(--zuiCheckboxAccentColor);
    --zuiCheckboxTransition: var(--useZuiTransition);

    --zuiIconColor: #d9dde9;
    --zuiIconSize: var(--useZuiIconSize, var(--zuiCheckboxSize));
    
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
    transition: background-color var(--zuiCheckboxTransition),
                filter var(--zuiCheckboxTransition);
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
  place-self: center;
  align-self: center;
  justify-self: center;
  transition: filter var(--zuiCheckboxTransition);
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