import { css } from "lit";

export const styles = css`
:host {
  --zuiButtonRadius: var(--useZuiRadius, 0);
  --zuiButtonBackground: var(--useZuiPrimary, #325cff);
  --zuiButtonForeground: var(--useZuiForeground, #e8e9ee);
  --zuiButtonBorderThickness: var(--useZuiBorderThickness);
  --zuiButtonBorderColor: var(--useZuiAccent, #325cff);
  --zuiIconColor: var(--zuiButtonForeground);
  display: inline-flex;
  padding: .5rem 1.25rem;
  font-size: var(--zuiFontM,1.25rem);
  cursor: pointer;
  background: var(--zuiButtonBackground);
  border-radius: var(--zuiButtonRadius);
  border: var(--zuiButtonBorderThickness) solid var(--zuiButtonBorderColor,transparent);
  box-sizing: border-box;
  color: var(--zuiButtonForeground);
  align-items: center;
  align-content: center;
  gap: 5px;
  box-shadow: 0px 0px 5px -1px black;
  transition: background-color var(--useZuiEase),
              filter var(--useZuiEase);
}
`