import { css } from "lit";

export const styles = css`
:host {
  --zuiSelectWidth: var(--useZuiSelectWidth, max-content);
  --zuiSelectDropableWidth: var(--useZuiSelectWidth, -webkit-fill-available);
}
:host(:not([multiple])) ::slotted(zui-option) {
  --useZuiRadius: var(--zuiCircle);
  --useZiIconSvgSize: .55rem;
  --zuiCheckboxThickness: 2px;
  --zuiCheckboxFillColor: transparent;
  --zuiIconColor: var(--zuiAccentColor);
  --zuiCheckboxAccentColor: #232323;
}

:host ::slotted(zui-option) {
  position: relative;
  margin: var(--zuiPaddingXs);
  --zuiCheckboxSize: 1rem;
}
/* :host ::slotted(zui-option:nth-child(even))::after {
  content:'';
  position: absolute;
  width: 100%;
  height: 100%;
  float:left;
  background-color: #23232368;
  z-index: 1;
  padding: calc(var(--zuiPaddingXs)*2);
  transform: translate(-50%);
  left: var(--zuiSelectDropableWidth, 50%);
  transform-origin:center center;

} */
zui-dropdown {
  --useZuiDropdownWidth: var(--zuiSelectWidth);
}
`