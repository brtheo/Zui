import { html, LitElement, TemplateResult, adoptStyles } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { DirectiveResult } from 'lit/directive'
import { unsafeSVG, UnsafeSVGDirective } from 'lit/directives/unsafe-svg.js'
import { until } from 'lit/directives/until.js'
import { ESizeKeys } from './../ZuiTheme'
import { styles } from './styles'

declare global {
  interface HTMLElementTagNameMap {
    'zui-icon': ZuiIcon
  }
}
/**
 * Fetches an svg icon from any location and caches it to the localstorage. 
 * On a fresh load of the page, the component is showing the result of the fetched url and on the reload of the page it is showing the cached svg.
 * @prop {string} name name of the icon to fetch 
 * @prop {string} provider key registered in {@linkcode globalThis.__JUI__.icon.provider provider} object of the Zui config
 * @prop {ESizeKeys} size size of the icon, can be either `xs` `sm` `base` `lg` `xl` `xxl` `xxxl` `xxxxl` 
 * @prop {string} color uses the `fill` css prop to color the icon
 */
@customElement('zui-icon')
export class ZuiIcon extends LitElement {
  @property({ reflect: true })
  name: string
  @property({ reflect: true })
  provider: string = 'default'
  @property({ reflect: true, type: String })
  size: ESizeKeys = 'base'
  @property({ reflect: true })
  color?: string

  /**
   * Fetch the icon from the provider uri defined in the config then cahes it to the localstorage
   * @param iconName 
   * @returns svg icon string
   */
  private async fetchIcon(iconName: string = this.name): Promise<DirectiveResult<typeof UnsafeSVGDirective>> {
    if (localStorage.getItem(`icon_${iconName}`) === null) {
      const [provider,iconName] = this.name.includes('#') ? this.name.split('#'): [undefined, this.name]
      const iconProvider = provider  !== undefined 
        ? globalThis.__JUI__.iconProvider[provider]
        : globalThis.__JUI__.iconProvider.default
      const res = await fetch(`${iconProvider}${iconName}.svg`)
      const iconSvg = await res.text()
      localStorage.setItem(`icon_${iconName}`, iconSvg)
      return unsafeSVG(iconSvg)
    }
    else return unsafeSVG(localStorage.getItem(`icon_${iconName}`))
  }
  protected render(): TemplateResult {
    adoptStyles(this.renderRoot as ShadowRoot, [styles(this)])
    return html`
      ${this.name !== undefined ? until(this.fetchIcon()) : ''}          
    `
  }
}