import {css} from 'lit'
import { userSelectNone,userSelectText } from '../../shared/styles'
export const styles = css`
:host{
    --zui-checkbox-size: var(--zui-sm);
    --zui-checkbox-label-size: var(--zui-checkbox-size);
    --zui-checkbox-thickness: 1px;
    --zui-checkbox-radius: var(--use-zui-radius);
    --zui-checkbox-accent-color:  var(--zui-accent-color);
    --zui-checkbox-fill-color: var(--zui-checkbox-accent-color);
    --zui-checkbox-transition: var(--use-zui-transition);

    --zui-icon-color: #d9dde9;
    --use-zui-icon-size: var(--zui-checkbox-size);   
    /* width: var(--zui-checkbox-size);
    height: var(--zui-checkbox-size); */
    display: flex;
    /* align-items: center;
    justify-content: center; */
    cursor: pointer;
    position: relative;
    /* border: var(--zui-checkbox-thickness) solid var(--zui-checkbox-accent-color);
    border-radius: var(--zui-checkbox-radius);
    box-sizing: border-box;
    transition: background-color var(--zui-checkbox-transition),
                filter var(--zui-checkbox-transition); */
    gap: 15px;
    ${userSelectNone};
}
:host([checked])::before {
  background-color: var(--zui-checkbox-fill-color);
}
:host([checked]) zui-icon {
  filter: opacity(1);
}

:host::before{
  content:'';
  position: absolute;
  width: var(--zui-checkbox-size);
  height: var(--zui-checkbox-size);
  display: flex;
  border: var(--zui-checkbox-thickness) solid var(--zui-checkbox-accent-color);
  border-radius: var(--zui-checkbox-radius);
  box-sizing: border-box;
  transition: background-color var(--zui-checkbox-transition),
              filter var(--zui-checkbox-transition);
}

zui-icon {
  filter: opacity(0);
  place-self: center;
  align-self: center;
  justify-self: center;
  transition: filter var(--zui-checkbox-transition);
  /* transform: translateX(-100%); */
}
label {
  font-size: var(--zui-checkbox-label-size);
  /* position: absolute; */
  width: max-content;
  /* margin-inline-start: var(--zui-checkbox-size); */
  /* transform: translateX(50%); */
  line-height: var(--zui-checkbox-size);
  ${userSelectText};
} 
`