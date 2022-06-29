import {LitElement, html, css, CSSResultGroup} from 'lit'
import {customElement} from 'lit/decorators.js'
import { sizingFor } from '../shared/styles'

@customElement('zui-text')
export class ZuiText extends LitElement {
  static styles: CSSResultGroup[] = [
    css`
      :host {
        display: flex;
        font-size: var(--zuiBase)
      }
    `, sizingFor('font-size')
  ]

  render() {
    return html`
      <slot></slot>
    `
  }
}