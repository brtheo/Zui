import { css } from "lit";

export const styles = css`
:host(:not([multiple])) > ::slotted(zui-option) {
  --useZuiRadius: var(--zuiCircle);
  --zuiIconSize: .85rem !important;
  --zuiCheckboxThickness: 2px;
  --zuiCheckboxFillColor: transparent;
  --zuiIconColor: var(--zuiAccentColor);
  --zuiCheckboxAccentColor: #232323;
}
`