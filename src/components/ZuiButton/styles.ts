import { css } from "lit";

export const styles = css`
:host {
  --zui-button-radius: var(--use-zui-radius, 0);
  --zui-button-background: var(--use-zui-primary, #325cff);
  --zui-button-foreground: var(--use-zui-foreground, #e8e9ee);
  --zui-button-border-thickness: var(--use-zui-border-thickness);
  --zui-button-border-color: var(--use-zui-accent, #325cff);
  --zui-button-transition: var(--use-zui-transition);
  --zui-icon-color: var(--zui-button-foreground);
  --zui-button-padding: var(--use-zui-padding,
     var(--zui-padding-sm) var(--zui-padding)
  );
  display: inline-flex;
  padding: var(--zui-button-padding);
  font-size: var(--zuiFontM,1.25rem);
  cursor: pointer;
  background: var(--zui-button-background);
  border-radius: var(--zui-button-radius);
  border: var(--zui-button-border-thickness) solid var(--zui-button-border-color,transparent);
  box-sizing: border-box;
  color: var(--zui-button-foreground);
  align-items: center;
  align-content: center;
  gap: 5px;
  box-shadow: 0px 2px 4px -2px black;
  transition: background-color var(--zui-button-transition),
              filter var(--zui-button-transition);
}
`