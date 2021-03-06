import { html, TemplateResult, CSSResultGroup, LitElement } from 'lit'
import { property, customElement} from 'lit/decorators.js'	
import { CSSVar} from '../../shared/utils'
import { Inputable, InputableStyles } from '../../traits/inputable';
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
@Inputable 
export class ZuiCheckbox extends LitElement {

  @property({ reflect: true})
  icon: string = 'check'

  @property({ reflect: true }) 
  value: string = ''

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
    this.setAttribute('aria-disabled',`${this.disabled}`)
    this.setAttribute('aria-checked',`${this.checked}`)  
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
    this.dispatchEvent(new Event('change', {
      bubbles: true
    }))
  }

  static override styles: CSSResultGroup[] = [InputableStyles, styles]

  protected render(): TemplateResult {
    return html`
      <zui-icon 
        name="${this.icon}"
        color=${CSSVar('--zui-icon-color', this)} >
      </zui-icon>
      <label>
        <slot></slot>
      </label>

    `
  }
}

