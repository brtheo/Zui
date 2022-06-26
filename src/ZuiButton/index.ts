import { html, LitElement, TemplateResult } from "lit"
import { customElement, property } from "lit/decorators.js"
import {when} from "lit/directives/when.js"
import { disabled, fab, outlined, rounded, transition } from "../shared/styles"
import { styles } from "./styles"

declare global {
  interface HTMLElementTagNameMap {
    'zui-button': ZuiButton
  }
}

@customElement('zui-button')
export default class ZuiButton extends LitElement {
  @property({ reflect: true , type: Boolean})
  disabled: boolean = false
  @property({reflect: true})
  iconAfter?: string
  @property({reflect: true})
  iconBefore?: string
  @property({reflect: true})
  icon?: string

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('role','button')
    this.setAttribute('aria-disabled',`${this.disabled}`)       
  }

  static override styles = [styles, rounded, outlined, disabled, transition, fab]
  render(): TemplateResult {
    return html`
      ${ when(this.iconBefore !== undefined,
        () => html`<zui-icon name=${this.iconBefore as string}></zui-icon>`)
      }
      ${ when(this.icon === undefined,
        () => html`<slot></slot>`,
        () => html`<zui-icon name=${this.icon as string}></zui-icon>`)
      }
      ${ when(this.iconAfter !== undefined,
        () => html`<zui-icon name=${this.iconAfter as string}></zui-icon>`)
      }
    `
  }
}