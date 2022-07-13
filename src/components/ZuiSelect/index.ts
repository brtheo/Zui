import { CSSResultGroup, html} from 'lit'
import { customElement, property, query, queryAssignedElements, state,} from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'
import { rounded } from '../../shared/styles'
import { ZuiCheckbox } from '../ZuiCheckbox'
import { ZuiDropdown } from '../ZuiDropdown'
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

  @property({reflect: true})
  thumbIcon: string = 'unfold-more-horizontal'

  @queryAssignedElements() $zuiOptions: ZuiOption[]

  @query('zui-dropdown') $zuiDropdown: ZuiDropdown

  @state() parentHeight: number

  connectedCallback() {
    super.connectedCallback()

    document.addEventListener('_dropdownIntercept', (e: CustomEvent) => {
      console.log(e.detail)
      let prev =  e.detail,
      curr = this.$zuiDropdown.opened
      if(!prev && curr)
       this.$zuiDropdown.shrink()
      else {
        prev = null
        curr = null
      }
    })
  }

  override handleToggleLogic (){
  }

  firstUpdated(): void {
    this.$zuiOptions.forEach(($zuiOption: ZuiOption) => $zuiOption.icon = this.icon)
    if(!this.multiple)
      super.handleToggleLogic(this.$zuiOptions)
    else this.handleToggleLogic()
  }

  static styles: CSSResultGroup[] = [ZuiRadiogroup.styles, styles, rounded] 

  render() {
    const parentHeightStyle = {'--zuiParentHeight': `30px` }
    return html`
      <zui-dropdown
        style=${styleMap(parentHeightStyle)}
        iconAfter=${this.thumbIcon}
        ?select=${true}>
        <span slot="summary">${this.title}</span>
        <slot></slot>
      </zui-dropdown>
      
    `
  }
}