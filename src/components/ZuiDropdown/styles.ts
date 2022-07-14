import { css} from "lit"
import { userSelectNone } from "../../shared/styles"

export const styles = css`
:host {
  --zui-dropdown-accent: var(--zui-accent-color);
  --zui-dropdown-background: var(--zui-background, #fefefe);
  --zui-dropdown-hidden-content-padding:  var(--zui-padding-xxs) 
                                      var(--zui-padding-xs);
  --zui-dropdown-radius: var(--use-zui-radius);
  --zui-dropdown-width: var(--use-zui-dropdown-width);

  display: flex;
  cursor: pointer;
  flex-direction: column;
  position: relative;
  height: 100%;
  max-width: var(--zui-dropdown-width);
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
  background: var(--zui-dropdown-background);
  padding: var(--zui-dropdown-hidden-content-padding);
  border-radius: var(--zui-dropdown-radius);
  border: 1px solid var(--zui-dropdown-accent);
  width: var(--zui-dropdown-width);
}
aside {
  background: var(--zui-dropdown-background);
  z-index: 1000;
  padding: var(--zui-dropdown-hidden-content-padding);
  display: none;
  border-radius: var(--zui-dropdown-radius);
  border: 1px solid var(--zui-dropdown-accent);
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
  width: var(--zui-select-dropable-width, -webkit-fill-available);
  margin-block-start: 29px;
  /* margin-block-start: calc(var(--zuiParentHeight) - 1px); */
  padding: var(--zui-dropdown-hidden-content-padding);
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