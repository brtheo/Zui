import { html, LitElement, TemplateResult, CSSResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'	
import {classMap} from 'lit/directives/class-map.js';
import { disabled, iconTransition, rounded, transition } from '../shared/styles';
import { CSSVar} from '../shared/utils'
import { styles} from './styles';

declare global {
  interface HTMLElementTagNameMap {
    'zui-checkbox': ZuiCheckbox
  }
}
/**
 * Checkbox input component
 * @prop {String} `icon` indicate the icon to display within the zui-icon component
 * @prop {Boolean} `checked` indicates the state of the component is in
 * @prop {Boolean} `transition` flag to use or not css `transition` between state changes
 * @prop {Boolean} `disabled` flag to disable or not the input
 * @fires ZuiCheckbox#change
 */
@customElement('zui-checkbox')
export class ZuiCheckbox extends LitElement {
  @property({ reflect: true})
  icon: string = 'check'
  @property({ reflect: true , type: Boolean})
  checked: boolean = false
  @property({ reflect: true , type: Boolean})
  transition: boolean = false
  @property({ reflect: true , type: Boolean})
  disabled: boolean = false

  /**
   * Sets accessibility attributes and listener
   */
  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('role','checkbox')
    this.setAttribute('aria-checked',`${this.checked}`)
    this.setAttribute('aria-disabled',`${this.disabled}`)   
    this.disabled ? this.removeEventListener<'click'>('click', this.toggleCheck) : this.addEventListener<'click'>('click',this.toggleCheck)
  }

  /**
   * Fires when the component is clicked
   * @param e click event
   */
  toggleCheck(e: Event) {
    e.preventDefault()
    this.checked = !this.checked
    this.setAttribute('aria-checked',`${this.checked}`)
    /**
     * Change event.
     * @event ZuiCheckbox#change 
     * @type {change}
     */
    this.dispatchEvent(new Event('change', {}))
  }

  static override styles: CSSResult[] = [styles, rounded, disabled, transition, iconTransition]

  protected render(): TemplateResult {
    // flagPropsToStyles(['disabled','transition'],this, styles, flagPropsStyleMap)
    return html`
      <label>
        <slot></slot>
      </label>
      <zui-icon 
        name="${this.icon}"
        class=${classMap({iconTransition: this.transition})}
        color=${CSSVar('--zuiIconColor', this)} ></zui-icon>
    `
  }
}