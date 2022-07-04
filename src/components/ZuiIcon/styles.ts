import {unsafeCSS, css} from 'lit'
import { ZuiIcon } from '.'

export const styles = ($this: ZuiIcon) => css`
:host {
  --__ZuiIconColor: var(--zuiIconColor, ${unsafeCSS($this.color)} );
  width: var(--zuiIconSize);
  height: var(--zuiIconSize); 
  display: flex;
  place-items: center;
}

svg {
  fill: var(--__ZuiIconColor);
  width: inherit;
  height: inherit; 
}`