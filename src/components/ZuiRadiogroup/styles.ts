import { css } from "lit";

export const styles = css`
:host {
  --zuiRadiogroupRadius: var(--useZuiRadius);
  --zuiRadiogroupBorderThickness: var(--zuiBorderThickness);
  --zuiRadiogroupBorderStyle: solid;
  --zuiRaiogroupBorderColor: var(--zuiAccentColor);
  --zuiRadiogroupBorder:  var(--zuiRadiogroupBorderThickness)
                          var(--zuiRadiogroupBorderStyle)
                          var(--zuiRaiogroupBorderColor);
}
fieldset {
  border: var(--zuiRadiogroupBorder);
  border-radius: var(--zuiRadiogroupRadius);
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