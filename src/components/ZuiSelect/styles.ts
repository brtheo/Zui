import { css } from "lit";
import { userSelectNone } from "../../shared/styles";

export const styles = css`
:host {
  --zui-select-width: var(--use-zui-select-width, max-content);
  --zui-select-dropable-width: var(--use-zui-select-width, -webkit-fill-available);
}
:host * {
  ${userSelectNone};
}
:host(:not([multiple])) ::slotted(zui-option) {
  --use-zui-radius: var(--zui-circle);
  --use-zui-icon-svg-size: .60rem;
  --zui-checkbox-thickness: 2px;
  --zui-checkbox-fill-color: transparent;
  --zui-icon-color: var(--zui-accent-color);
  ${userSelectNone};
  /* --zui-checkbox-accent-color: #232323; */
}

:host ::slotted(zui-option) {
  position: relative;
  margin: var(--zui-padding-xs);
  --zui-checkbox-size: 1rem;
}
/* :host ::slotted(zui-option:nth-child(even))::after {
  content:'';
  position: absolute;
  width: 100%;
  height: 100%;
  float:left;
  background-color: #23232368;
  z-index: 1;
  padding: calc(var(--zui-padding-xs)*2);
  transform: translate(-50%);
  left: var(--zui-select-dropable-width, 50%);
  transform-origin:center center;

} */
zui-dropdown {
  --use-zui-dropdown-width: var(--zui-select-width);
}
`