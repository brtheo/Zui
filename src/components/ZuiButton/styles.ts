import { css } from "lit";

export const styles = css`
:host {
  --zuiButtonRadius: var(--useZuiRadius, 0);
  --zuiButtonBackground: var(--useZuiPrimary, #325cff);
  --zuiButtonForeground: var(--useZuiForeground, #e8e9ee);
  --zuiButtonBorderThickness: var(--useZuiBorderThickness);
  --zuiButtonBorderColor: var(--useZuiAccent, #325cff);
  --zuiButtonTransition: var(--useZuiTransition);
  --zuiIconColor: var(--zuiButtonForeground);
  --zuiButtonPadding: var(--useZuiPadding,
     var(--zuiPaddingSm) var(--zuiPadding)
  );
  display: inline-flex;
  padding: var(--zuiButtonPadding);
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
  box-shadow: 0px 2px 4px -2px black;
  transition: background-color var(--zuiButtonTransition),
              filter var(--zuiButtonTransition);
}
`