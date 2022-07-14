import { html, LitElement, TemplateResult, CSSResultGroup} from 'lit'
import { customElement, property, query, state } from 'lit/decorators.js'
import { styles } from './styles'
import { when } from 'lit/directives/when.js'
import { classMap } from 'lit/directives/class-map.js'
import { Inputable, InputableStyles } from '../../traits/inputable'

declare global {
  interface HTMLElementTagNameMap {
    'zui-dropdown': ZuiDropdown
  }
}

@customElement('zui-dropdown')
@Inputable
export class ZuiDropdown extends LitElement {

  @property({type: Boolean, reflect:true})
  opened: boolean = false

  @property({reflect: true})
  iconAfter?: string

  @property({reflect: true})
  iconBefore?: string
  
  @property({reflect: true})
  icon?: string

  @property({reflect: true, type: Boolean})
  select?: boolean = false

  @state()
  isClosing: boolean = false

  @state()
  isExpanding: boolean = false

  @query('main')
  $summary: HTMLElement

  @query('aside')
  $options: HTMLElement

  connectedCallback(): void {
    super.connectedCallback()
    document.addEventListener('click', (e: Event) =>{ 
      const path = e.composedPath().map((element: HTMLElement) => element.tagName)
      this.opened && this.select
      && (
        !path.includes('ZUI-SELECT')
        || !path.includes('ZUI-DROPDOWN')
      ) ? this.shrink() : null
      })
  }

  handleClick(e: Event) {
    e.preventDefault()
    if(this.isClosing || !this.opened) this.open()
    else if (this.isExpanding || this.opened) this.shrink()
    this.opened = !this.opened
  }

  open() {
    this.opened = true
    window.requestAnimationFrame(() => this.expand())
  }

  shrink() {
    this.isClosing = true
    this.$options.classList.add('eraseContent')
    this.$options.classList.add('animationLeave')
    this.$options.onanimationend = () => this.handleAnimationFinish(false)
    this.$options.onanimationcancel = () => this.isClosing = false
  }

  expand() {
    if(this.select)document.dispatchEvent(new CustomEvent('_dropdownIntercept', {detail:this.opened}))
    this.isExpanding = true
    this.$options.classList.add('eraseContent')
    this.$options.style.display = 'flex'
    this.$options.classList.add('animationEnter')
    this.$options.onanimationend = () => this.handleAnimationFinish(true)
    this.$options.onanimationcancel = () => this.isClosing = false
  }

  handleAnimationFinish(open: boolean) {
    this.$options.style.display = open ? 'flex' : 'none'  
    this.opened = open
    // this.zuiAnimation.animation = null
    this.isClosing = false
    this.isExpanding = false
    this.$options.classList.remove('eraseContent')
    this.$options.classList.remove('animationEnter')
    this.$options.classList.remove('animationLeave')
  }

  static override styles: CSSResultGroup[] = [InputableStyles, styles]

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
      <aside class="topToBottom ${classMap({selectContext: this.select})}">
        <slot></slot>
      </aside>
    `
  }
}
