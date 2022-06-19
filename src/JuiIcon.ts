import { html, css, unsafeCSS, LitElement, TemplateResult, adoptStyles, CSSResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { DirectiveResult } from 'lit/directive'
import { unsafeSVG, UnsafeSVGDirective } from 'lit/directives/unsafe-svg.js'
import { until } from 'lit/directives/until.js'
import { ESize, ESizeKeys } from './JuiTheme'

if (!globalThis.hasOwnProperty('__JUI__')) 
  globalThis.__JUI__ = { 
    iconProvider: { 
      default: 'https://raw.githubusercontent.com/Templarian/MaterialDesign-SVG/master/svg/' 
    } 
  }
globalThis.__JUI__.iconProvider.default = 'https://raw.githubusercontent.com/Templarian/MaterialDesign-SVG/master/svg/'

@customElement('jui-icon')
export class JuiIcon extends LitElement {
  @property({ reflect: true })
  name?: string
  @property({ reflect: true, type: String })
  size: ESizeKeys = 'base'
  @property({ reflect: true })
  provider: string = 'default'
  @property({ reflect: true })
  color?: string


  private get styles(): CSSResult {
    return css`
      :host {
        --__JuiIconColor: var(--juiIconColor, ${unsafeCSS(this.color)} );
        --__JuiIconSize: var(--juiIconSize, ${unsafeCSS(ESize[this.size])});
      }
      :host, svg {
          fill: var(--__JuiIconColor);
          width: var(--__JuiIconSize);
          height: var(--__JuiIconSize); 
          display: inline-flex;
          align-items: center;
      }
      svg {display: inline-flex;}
    `}

  async fetchIcon(iconName: string): Promise<DirectiveResult<typeof UnsafeSVGDirective>> {
    if (localStorage.getItem(`icon_${iconName}`) === null) {
      const iconProvider = globalThis.__JUI__.iconProvider[this.provider]
      const res = await fetch(`${iconProvider}${iconName}.svg`)
      const iconSvg = await res.text()
      localStorage.setItem(`icon_${iconName}`, iconSvg)
      return unsafeSVG(iconSvg)
    }
    else return unsafeSVG(localStorage.getItem(`icon_${iconName}`))
  }
  protected render(): TemplateResult {
    adoptStyles(this.renderRoot as ShadowRoot, [this.styles])
    return html`
      ${this.name !== undefined ? until(this.fetchIcon(this.name)) : ''}          
    `
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'jui-icon': JuiIcon
  }
  var __JUI__: {
    iconProvider: {
      [key: string]: string
    }
  }

}