import {PolymerElement, html} from '@polymer/polymer';
import {customElement, property} from '@polymer/decorators';

@customElement('polymer-typescript')
export class PolymerTypescript extends PolymerElement {
  @property() name = 'Polymer decorated';

  static get template() {
    return html`
      <style>
      p {
        color: red;
      }
      </style>
      <p>Hello, [[name]]!</p>
    `;
  }
}
