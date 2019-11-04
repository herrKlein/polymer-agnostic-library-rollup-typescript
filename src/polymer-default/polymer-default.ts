import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import { property } from '@polymer/decorators';

export class PolymerDefault extends PolymerElement {

  // @property() prop1 = 'PolymerDefault';
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'PolymerDefault'
      }
    };
  }

  static get template() {
    return html`<h2>Hello [[prop1]]!</h2>`;
  }
}


