import {PolymerElement, html} from '@polymer/polymer';
import {customElement, property} from '@polymer/decorators';

@customElement('lazy-element')
export class LazyElement extends PolymerElement {
  @property() name = 'LazyElement';

  static get template() {
    return html`<p>Hello, [[name]]!</p>`;
  }
}
