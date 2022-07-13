import {unsafeCSS, css} from 'lit'
import { ZuiIcon } from '.'

export const styles = ($this: ZuiIcon) => css`
:host {
  --__ZuiIconColor: var(--zuiIconColor, ${unsafeCSS($this.color)} );
  --zuiIconSize: var(--useZuiIconSize);
  --zuiIconSvgSize: var(--useZuiIconSvgSize, var(--zuiIconSize));
  width: var(--zuiIconSize);
  height: var(--zuiIconSize); 
  display: flex;
  place-items: center;
  justify-content: center;
}

svg {
  fill: var(--__ZuiIconColor);
  width: calc(var(--zuiIconSvgSize));
  height: calc(var(--zuiIconSvgSize)); 
}`