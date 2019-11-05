import { LitElement, html, property, customElement } from 'lit-element';

@customElement('simple-greeting')
export class LitComponent extends LitElement {
  @property() name = 'SimpleGreeting';

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
      <polymer-default></polymer-default>
      <polymer-typescript></polymer-typescript>
    `;
  }
}