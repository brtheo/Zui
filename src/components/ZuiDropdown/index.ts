import { html, LitElement, TemplateResult, CSSResultGroup} from 'lit'
import { customElement, property, query, state } from 'lit/decorators.js'
import { styles } from './styles'
import { when } from 'lit/directives/when.js'

declare global {
  interface HTMLElementTagNameMap {
    'zui-dropdown': ZuiDropdown
  }
}

@customElement('zui-dropdown')
export class ZuiDropdown extends LitElement {

  @property({type: Boolean, reflect:true})
  opened: boolean = false

  @property({reflect: true})
  iconAfter?: string

  @property({reflect: true})
  iconBefore?: string
  
  @property({reflect: true})
  icon?: string

  @state()
  isClosing: boolean = false

  @state()
  isExpanding: boolean = false

  @state()
  animation: any | null = null

  @query('main')
  $summary: HTMLElement

  @query('aside')
  $options: HTMLElement

  connectedCallback(): void {
    super.connectedCallback()
      this.setAttribute('role','listbox')
  }

  handleClick(e: Event) {
    e.preventDefault()
    
    console.log(this.opened)
    if(this.isClosing || !this.opened) this.open()
    else if (this.isExpanding || this.opened) this.shrink()
    this.opened = !this.opened
    
  }

  shrink() {
    this.isClosing = true
    if(this.animation) this.animation.cancel()
    this.animation = this.$options.animate({
      transform: ['scaleY(1)','scaleY(0)'],
      opacity: ['1','0']
    }, {
      duration: 200,
      easing: 'ease-in'
    })
    this.animation.onfinish = () => this.handleAnimationFinish(false)
    this.animation.oncancel= () => this.isClosing = false
  }

  open() {
    this.opened = true
    window.requestAnimationFrame(() => this.expand())

  }

  expand() {
    this.isExpanding = true
    this.$options.style.display = 'flex'
    if(this.animation) this.animation.cancel()
    this.animation = this.$options.animate({
      transform: ['scaleY(0)','scaleY(1)'],
      opacity: ['0','1']
    },{
      duration: 200,
      easing: 'ease-in'
    })
    this.animation.onfinish = () => this.handleAnimationFinish(true)
    this.animation.oncancel= () => this.isClosing = false
  }

  handleAnimationFinish(open: boolean) {
    this.$options.style.display = open ? 'flex' : 'none'  
    this.opened = open
    this.animation = null
    this.isClosing = false
    this.isExpanding = false
  }

  static override styles: CSSResultGroup[] = [styles]

  protected render(): TemplateResult {
    return html`
      <main @click=${this.handleClick}>
        ${ when(this.iconBefore !== undefined,
          () => html`<zui-icon name=${this.iconBefore as string}></zui-icon>`)
        }
        ${ when(this.icon === undefined,
          () => html`<slot name="summary" ></slot>`,
          () => html`<zui-icon name=${this.icon as string}></zui-icon>`)
        }
        ${ when(this.iconAfter !== undefined,
          () => html`<zui-icon name=${this.iconAfter as string}></zui-icon>`)
        }
      </main>
      <aside class="topToBottom">
        <slot></slot>
      </aside>
    `
  }
}
