import { LitElement, adoptStyles, CSSResult } from "lit"

export const CSSVar = (customPropertyName: string, element = document.documentElement): string =>
  getComputedStyle(element).getPropertyValue(customPropertyName)

export const flagPropsToStyles = (props: string[], target: LitElement, basestyles: CSSResult, styleMap: Map<string,CSSResult>) => {
  const styles = props.filter((prop: string) => (target as {[keys:string]:any})[prop])
  adoptStyles(target.renderRoot as ShadowRoot, [basestyles, ...styles.map((prop:string)=>styleMap.get(prop) as CSSResult)])
}