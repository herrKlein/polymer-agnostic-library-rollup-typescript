import {PolymerDefault} from './polymer-default/polymer-default'
import {PolymerTypescript} from './polymer-typescript/polymer-typescript'
import {LitComponent} from './lit-component/lit-component'

PolymerTypescript;
LitComponent;

PolymerDefault;
customElements.define('polymer-default', PolymerDefault);

export * from './polymer-default/polymer-default';
export * from './polymer-typescript/polymer-typescript';
export * from './lit-component/lit-component';
