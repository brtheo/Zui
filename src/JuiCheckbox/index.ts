import { html, LitElement, TemplateResult, CSSResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'	
import {classMap} from 'lit/directives/class-map.js';
import { CSSVar, flagPropsToStyles } from '../shared/utils'
import { styles, flagPropsStyleMap } from './styles';

declare global {
  interface HTMLElementTagNameMap {
    'jui-checkbox': JuiCheckbox
  }
}
/**
 * Checkbox input component
 * @prop {Boolean} `checked` indicates the state of the component is in
 * @prop {Boolean} `transition` flag to use or not css `transition` between state changes
 * @prop {Boolean} `disabled` flag to disable or not the input
 * @fires JuiCheckbox#change
 */
@customElement('jui-checkbox')
export class JuiCheckbox extends LitElement {
  @property({ reflect: true , type: Boolean})
  checked: Boolean = false
  @property({ reflect: true , type: Boolean})
  transition: Boolean = false
  @property({ reflect: true , type: Boolean})
  disabled: Boolean = false

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
     * @event JuiCheckbox#change 
     * @ype {change}
     */
    this.dispatchEvent(new Event('change', {}))
  }

  static override styles: CSSResult = styles

  protected render(): TemplateResult {
    flagPropsToStyles(['disabled','transition'],this, styles, flagPropsStyleMap)
    return html`
      <label>
        <slot></slot>
      </label>
      <slot name="icon" class=${classMap({iconTransition: this.transition as boolean})}>
        <jui-icon name="check" size="sm" color=${CSSVar('--juiIconColor', this)} ></jui-icon>
      </slot>
    `
  }
}