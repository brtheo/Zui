import { CSSResultGroup, html} from 'lit'
import {customElement, property, queryAssignedElements,} from 'lit/decorators.js'
import { ZuiCheckbox } from '../ZuiCheckbox'
import { ZuiRadiogroup } from '../ZuiRadiogroup'
import { styles } from './styles'


declare global {
  interface HTMLElementTagNameMap {
    'zui-select':ZuiSelect,
    'zui-option': ZuiOption
  }
}

@customElement('zui-option')
export class ZuiOption extends ZuiCheckbox {
  static styles: CSSResultGroup[] = [ZuiCheckbox.styles]
 }

@customElement('zui-select')
export class ZuiSelect extends ZuiRadiogroup {

  @property({reflect: true, type: Boolean})
  multiple: boolean = false

  @property({reflect: true})
  icon: string = 'circle'

  @queryAssignedElements() $zuiOptions: ZuiOption[]

  override handleToggleLogic (){
    this.$zuiOptions.forEach(e => console.log(e))
  }

  firstUpdated(): void {
    this.$zuiOptions.forEach(($zuiOption: ZuiOption) => $zuiOption.icon = this.icon)
    if(!this.multiple)
      super.handleToggleLogic(this.$zuiOptions)
    else this.handleToggleLogic()
  }

  static styles: CSSResultGroup[] = [ZuiRadiogroup.styles, styles] 

  render() {
    return html`
      <slot></slot>
    `
  }
}