import { html, css, unsafeCSS, LitElement, TemplateResult, CSSResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'	
import {classMap} from 'lit/directives/class-map.js';
import { CSSVar, flagPropsToStyles } from '../shared/utils'
import { styles, flagPropsStyleMap } from './styles';

declare global {
  interface HTMLElementTagNameMap {
    'jui-checkbox': JuiCheckbox
  }
}

@customElement('jui-checkbox')
export class JuiCheckbox extends LitElement {
  @property({ reflect: true , type: Boolean})
  checked: Boolean = false
  @property({ reflect: true , type: Boolean})
  transition: Boolean = false
  @property({ reflect: true , type: Boolean})
  disabled: Boolean = false

  constructor() {
    super()
  }

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('role','checkbox')
    this.setAttribute('aria-checked',`${this.checked}`)
    this.setAttribute('aria-disabled',`${this.disabled}`)   
    this.disabled ? this.removeEventListener('click', this.toggleCheck) : this.addEventListener('click',this.toggleCheck)
  }

  toggleCheck(e: Event) {
    e.preventDefault()
    this.checked = !this.checked
    this.setAttribute('aria-checked',`${this.checked}`)
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