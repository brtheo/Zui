import {unsafeCSS, css} from 'lit'
import { ZuiIcon } from '.'

export const styles = ($this: ZuiIcon) => css`
:host {
  --__-zui-icon-color: var(--zui-icon-color, ${unsafeCSS($this.color)} );
  --zui-icon-size: var(--use-zui-icon-size);
  --zui-icon-svg-size: var(--use-zui-icon-svg-size, var(--zui-icon-size));
  width: var(--zui-icon-size);
  height: var(--zui-icon-size); 
  display: flex;
  place-items: center;
  justify-content: center;
}

svg {
  fill: var(--__-zui-icon-color);
  width: calc(var(--zui-icon-svg-size));
  height: calc(var(--zui-icon-svg-size)); 
}`