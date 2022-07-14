import {LitElement, html, CSSResultGroup} from 'lit'
import {classMap} from 'lit/directives/class-map.js'
import {customElement, property, queryAssignedElements} from 'lit/decorators.js'
import { ZuiRadio } from '../ZuiRadio'
import { styles } from './styles'
import { rounded, transition } from '../../shared/styles'
import type { ZuiCheckbox } from '../ZuiCheckbox'

declare global {
  interface HTMLElementTagNameMap {
    'zui-radiogroup':ZuiRadiogroup
  }
}

@customElement('zui-radiogroup')
export class ZuiRadiogroup extends LitElement {

  @property({ reflect: true }) 
  title: string | null = null

  @property({ reflect: true }) 
  value: string | null = null

  @queryAssignedElements({selector: 'zui-radio'}) 
  $zuiRadios: ZuiRadio[]

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role','group')
  }

  /**
   * default logic for a group of {@linkcode ZuiCheckbox}
   * defines the uniqueness of an element marked as `checked`
   * @param $elements Array of base type {@linkcode ZuiCheckbox}
   */
  protected handleToggleLogic <T extends ZuiCheckbox>($elements: Array<T>) {
    $elements.forEach(($element: T) => 
      $element.addEventListener('change', (event: Event) =>{
        const $currentElement = event.currentTarget as T
        if(!$currentElement.hasAttribute('checked')) {
          const $checkedElement = $elements.find(r => r.hasAttribute('checked')) 
          if($checkedElement !== undefined) {
            $checkedElement.removeAttribute('checked')
            $checkedElement.setAttribute('aria-checked','false')
          }
          this.value = $currentElement.value
        } else this.value = null
      })
    )
  }

  protected firstUpdated(): void {
      this.handleToggleLogic<ZuiRadio>(this.$zuiRadios)
  }

  static styles: CSSResultGroup[] = [styles, rounded, transition]

  render() {
    return html`
      <fieldset class=${classMap({nofieldset: this.title === ''})} >
        <legend class=${classMap({nofieldset: this.title === ''})} >${this.title}</legend>
        <slot></slot>
      </fieldset>
      
    `
  }
}