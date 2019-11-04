import { LitElement, html, property, customElement } from 'lit-element';
import {LazyElement} from '../lazy-element/lazy-element'
import {PolymerDefault} from '../polymer-default/polymer-default'

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  @property() name = 'SimpleGreeting';

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
      <polymer-default></polymer-default>
      <lazy-element></lazy-element>
    `;
  }
}