import type {CSSResultGroup, LitElement} from 'lit'
import { disabled, focused, rounded, transition } from '../shared/styles'

type EVT_DOWN = 'mousedown'|'pointerdown'|'keydown'
type EVT_UP = 'mouseup'|'pointerup'|'keyup'

const EVT_DOWN  = ['mousedown','pointerdown','keydown']
const EVT_UP = ['mouseup','pointerup','keyup']

export const InputableStyles: CSSResultGroup = [rounded, disabled, transition, focused]

export type _LitElement = new (...args: any[]) => LitElement
export function Inputable<T extends _LitElement>(
  constructor: T
): T {
  return class extends constructor {
    setFocus = () => {
      this.tabIndex = 1 
      this.focus()
    }
    unsetFocus = () => this.removeAttribute('tabindex')
    connectedCallback(): void {
      super.connectedCallback()
      EVT_DOWN.forEach(
        (evt: EVT_DOWN) => this.addEventListener<EVT_DOWN>(evt, this.setFocus)
      )   
      EVT_UP.forEach(
        (evt: EVT_UP) => this.addEventListener<EVT_UP>(evt, this.unsetFocus)
      )   
    }
    disconnectedCallback(): void {
      super.disconnectedCallback()
      EVT_DOWN.forEach(
        (evt: EVT_DOWN) => this.removeEventListener<EVT_DOWN>(evt, this.setFocus)
      )   
      EVT_UP.forEach(
        (evt: EVT_UP) => this.removeEventListener<EVT_UP>(evt, this.unsetFocus)
      )  
    }
  }
}