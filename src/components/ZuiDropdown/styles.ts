import { css} from "lit"
import { userSelectNone } from "../../shared/styles"

export const styles = css`
:host {
  --zuiDropdownAccent: var(--zuiAccentColor);
  --zuiDropdownBackground: var(--zuiBackground, #fefefe);
  --zuiDropdownHiddenContentPadding:  var(--zuiPaddingXxs) 
                                      var(--zuiPaddingXs);
  --zuiDropdownRadius: var(--useZuiRadius);
  --zuiDropdownWidth: var(--useZuiDropdownWidth);

  display: flex;
  cursor: pointer;
  flex-direction: column;
  position: relative;
  height: 100%;
  max-width: var(--zuiDropdownWidth);
}

:host([opened]) main {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
:host(:not([opened])) main {
  z-index: -1;
}

main {
  display: flex;
  place-items: center;
  justify-content: space-between;  
  background: var(--zuiDropdownBackground);
  padding: var(--zuiDropdownHiddenContentPadding);
  border-radius: var(--zuiDropdownRadius);
  border: 1px solid var(--zuiDropdownAccent);
  width: var(--zuiDropdownWidth);
}
aside {
  background: var(--zuiDropdownBackground);
  z-index: 1000;
  padding: var(--zuiDropdownHiddenContentPadding);
  display: none;
  border-radius: var(--zuiDropdownRadius);
  border: 1px solid var(--zuiDropdownAccent);
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
aside slot {
  transition: color .200s ease-in;
}
.eraseContent {
  color: transparent;
  ${userSelectNone};
}
.eraseContentExpand {
  color: black;
  ${userSelectNone};
}
aside.selectContext {
  position: absolute;
  flex-direction: column;
  width: var(--zuiSelectDropableWidth, -webkit-fill-available);
  margin-block-start: 29px;
  /* margin-block-start: calc(var(--zuiParentHeight) - 1px); */
  padding: var(--zuiDropdownHiddenContentPadding);
}
aside.topToBottom {transform-origin: top}
aside.bottomToTop {transform-origin: bottom;} 

.animationEnter {
  animation: enter .200s ease-in;
}
.animationLeave {
  animation: leave .200s ease-in;
}
@keyframes enter {
  from {
    opacity: .7;
    transform: scaleY(0)
  }
  to {
    opacity: 1;
    transform: scaleY(1)
  }
}
@keyframes leave {
  from {
    opacity: 1;
    transform: scaleY(1)
  }
  to {
    opacity: .7;
    transform: scaleY(0)
  }
}
`