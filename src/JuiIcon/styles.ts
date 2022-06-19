import {unsafeCSS, css} from 'lit'
import { JuiIcon } from '.'
import {ESize} from '../JuiTheme'

export const styles = ($this: JuiIcon) => css`
:host {
  --__JuiIconColor: var(--juiIconColor, ${unsafeCSS($this.color)} );
  --__JuiIconSize: var(--juiIconSize, ${unsafeCSS(ESize[$this.size])});
}
:host, svg {
    fill: var(--__JuiIconColor);
    width: var(--__JuiIconSize);
    height: var(--__JuiIconSize); 
    display: inline-flex;
    align-items: center;
}
svg {display: inline-flex;}
`