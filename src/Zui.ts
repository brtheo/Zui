export interface ClassElement {
  kind: 'field' | 'method';
  key: PropertyKey;
  placement: 'static' | 'prototype' | 'own';
  initializer?: Function;
  extras?: ClassElement[];
  finisher?: <T>(clazz: Constructor<T>) => void | Constructor<T>;
  descriptor?: PropertyDescriptor;
}

export type Constructor<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): T;
};

// From the TC39 Decorators proposal
export interface ClassDescriptor {
  kind: 'class';
  elements: ClassElement[];
  finisher?: <T>(clazz: Constructor<T>) => void | Constructor<T>;
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */
/**
 * Allow for custom element classes with private constructors
 */
type CustomElementClass = Omit<typeof HTMLElement, 'new'>;

const legacyCustomElement = (tagName: string, clazz: CustomElementClass) => {
  window.customElements.define(tagName, clazz as CustomElementConstructor);
  // Cast as any because TS doesn't recognize the return type as being a
  // subtype of the decorated class when clazz is typed as
  // `Constructor<HTMLElement>` for some reason.
  // `Constructor<HTMLElement>` is helpful to make sure the decorator is
  // applied to elements however.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return clazz as any;
};

const standardCustomElement = (
  tagName: string,
  descriptor: ClassDescriptor
) => {
  const {kind, elements} = descriptor;
  return {
    kind,
    elements,
    // This callback is called once the class is otherwise fully defined
    finisher(clazz: Constructor<HTMLElement>) {
      window.customElements.define(tagName, clazz);
    },
  };
};

/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```js
 * @customElement('my-element')
 * class MyElement extends LitElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The tag name of the custom element to define.
 */
export const customElement =
  (tagName: string) =>
  (classOrDescriptor: CustomElementClass | ClassDescriptor) =>
  window.customElements.get(tagName) === undefined
    ? typeof classOrDescriptor === 'function'
      ? legacyCustomElement(tagName, classOrDescriptor)
      : standardCustomElement(tagName, classOrDescriptor as ClassDescriptor)
    : null;