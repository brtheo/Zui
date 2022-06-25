import {unsafeCSS, css} from 'lit'
import { ZuiIcon } from '.'
import {ESize} from '../ZuiTheme'

export const styles = ($this: ZuiIcon) => css`
:host {
  --__ZuiIconColor: var(--zuiIconColor, ${unsafeCSS($this.color)} );
  --__ZuiIconSize: var(--zuiIconSize, ${unsafeCSS(ESize[$this.size])});
}
:host, svg {
    fill: var(--__ZuiIconColor);
    width: var(--__ZuiIconSize);
    height: var(--__ZuiIconSize); 
    display: inline-flex;
    align-items: center;
}
svg {display: inline-flex;}
`