import { css } from "lit";

export const styles = css`
:host {
  --zui-radiogroup-radius: var(--use-zui-radius);
  --zui-radiogroup-border-thickness: var(--zuiBorderThickness);
  --zui-radiogroup-border-style: solid;
  --zui-radiogroup-border-color: var(--zui-accent-color);
  --zui-radiogroup-border:  var(--zui-radiogroup-border-thickness)
                          var(--zui-radiogroup-border-style)
                          var(--zui-radiogroup-border-color);
}
fieldset {
  border: var(--zui-radiogroup-border);
  border-radius: var(--zui-radiogroup-radius);
}
legend::first-letter {
  text-transform: capitalize;
}
.nofieldset {
  border: none;
  margin-block: 0px;
  margin-inline: 0px;
  padding-block: 0px;
  padding-inline: 0px;
  min-inline-size: unset;
}
legend.nofieldset {
  display: none
}`