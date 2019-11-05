import { LitElement, html, css, property, customElement } from 'lit-element';

@customElement('lit-component')
export class LitComponent extends LitElement {
  @property() name = 'Lit component';

  static get styles() {
    return css`
      p { color: purple; }
    `;
  }

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
    `;
  }
}