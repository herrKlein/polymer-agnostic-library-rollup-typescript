import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { property } from '@polymer/decorators';

export class PolymerDefault extends PolymerElement {

  // @property() prop1 = 'Polymer default';
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'Polymer default'
      }
    };
  }

  static get template() {
    return html`
      <style>
      p {
        color: green;
      }
      </style>
      <p>Hello [[prop1]]!</p>`;
  }
}


