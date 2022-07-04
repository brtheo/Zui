import { css} from "lit";

export const styles = css`
:host {
  display: flex;
  cursor: pointer;
  flex-direction: column;
}
main {
  display: flex;
  place-items: center;
  background: #fefefe;
  padding: .25rem .5rem;
}
aside {
  background: #fefefe;
  /* position: absolute; */
  z-index: 100;
  padding: .25rem .5rem;
  display: none;
}

aside.topToBottom {transform-origin: top;}
aside.bottomToTop {transform-origin: bottom;} 
`