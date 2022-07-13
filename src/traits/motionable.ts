import { _LitElement } from "./inputable"

export function Motionable<T extends _LitElement>(
  constructor: T
): T {
  return class extends constructor {
    
  }
}