import { css } from "lit";

export const styles = css`
:host {
  --zuiButtonRadius: var(--zuiRadius, 0);
  --zuiButtonBackground: var(--zuiPrimary, #325cff);
  --zuiButtonForeground: var(--zuiForeground, #e8e9ee);
  --zuiButtonBorderThickness: var(--zuiBorderThickness);
  --zuiButtonBorderColor: var(--zuiAccent, #325cff);
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
}
`