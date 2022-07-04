import { CSSResultGroup} from 'lit'
import {styles} from './styles'
import { ZuiCheckbox } from '../ZuiCheckbox'
import { customElement } from 'lit/decorators.js'

declare global {
  interface HTMLElementTagNameMap {
    'zui-radio': ZuiRadio
  }
}
@customElement('zui-radio')
export class ZuiRadio extends ZuiCheckbox {

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('icon','circle')
  }

  static styles: CSSResultGroup[] = [ZuiCheckbox.styles, styles]

  render() {
    return super.render()
  }
}