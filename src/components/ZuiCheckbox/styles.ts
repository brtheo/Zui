import {css} from 'lit'
import { userSelectNone,userSelectText } from '../../shared/styles'
export const styles = css`
:host{
    --zuiCheckboxSize: var(--zuiSm);
    --zuiCheckboxLabelSize: var(--zuiCheckboxSize);
    --zuiCheckboxThickness: 1px;
    --zuiCheckboxRadius: var(--useZuiRadius);
    --zuiCheckboxAccentColor:  var(--zuiAccentColor);
    --zuiCheckboxFillColor: var(--zuiCheckboxAccentColor);
    --zuiCheckboxTransition: var(--useZuiTransition);

    --zuiIconColor: #d9dde9;
    --useZuiIconSize: var(--zuiCheckboxSize);   
    /* width: var(--zuiCheckboxSize);
    height: var(--zuiCheckboxSize); */
    display: flex;
    /* align-items: center;
    justify-content: center; */
    cursor: pointer;
    position: relative;
    /* border: var(--zuiCheckboxThickness) solid var(--zuiCheckboxAccentColor);
    border-radius: var(--zuiCheckboxRadius);
    box-sizing: border-box;
    transition: background-color var(--zuiCheckboxTransition),
                filter var(--zuiCheckboxTransition); */
    gap: 15px;
    ${userSelectNone};
}
:host([checked])::before {
  background-color: var(--zuiCheckboxFillColor);
}
:host([checked]) zui-icon {
  filter: opacity(1);
}

:host::before{
  content:'';
  position: absolute;
  width: var(--zuiCheckboxSize);
  height: var(--zuiCheckboxSize);
  display: flex;
  border: var(--zuiCheckboxThickness) solid var(--zuiCheckboxAccentColor);
  border-radius: var(--zuiCheckboxRadius);
  box-sizing: border-box;
  transition: background-color var(--zuiCheckboxTransition),
              filter var(--zuiCheckboxTransition);
}

zui-icon {
  filter: opacity(0);
  place-self: center;
  align-self: center;
  justify-self: center;
  transition: filter var(--zuiCheckboxTransition);
  /* transform: translateX(-100%); */
}
label {
  font-size: var(--zuiCheckboxLabelSize);
  /* position: absolute; */
  width: max-content;
  /* margin-inline-start: var(--zuiCheckboxSize); */
  /* transform: translateX(50%); */
  line-height: var(--zuiCheckboxSize);
  ${userSelectText};
} 
`