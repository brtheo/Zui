import {unsafeCSS, css} from 'lit'
import { ZuiIcon } from '.'

export const styles = ($this: ZuiIcon) => css`
:host {
  --__ZuiIconColor: var(--zuiIconColor, ${unsafeCSS($this.color)} );
  /* --__ZuiIconSize: var(--zuiIconSize); */
  width: var(--zuiIconSize);
  height: var(--zuiIconSize); 
}

svg {
    fill: var(--__ZuiIconColor);
    width: inherit;
    height: inherit; 
    display: inline-flex;
    align-items: center;
}
`