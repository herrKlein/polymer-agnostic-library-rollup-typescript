import { LitElement, html, property, customElement } from 'lit-element';

@customElement('polymer-library-agnostic-rollup-typescript')
class PolymerLibraryAgnosticRollupTypescript extends LitElement {

  render() {
    return html`
      <h1>Polymer Library Agnostic Rollup Typescript</h1>
      <lit-component></lit-component>
      <polymer-default></polymer-default>
      <polymer-typescript></polymer-typescript>
    `;
  }
}