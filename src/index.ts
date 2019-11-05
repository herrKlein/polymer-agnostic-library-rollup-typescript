import {PolymerDefault} from './polymer-default/polymer-default'
import {PolymerTypescript} from './polymer-typescript/polymer-typescript'
import {LitComponent} from './lit-component/lit-component'
import './polymer-library-agnostic-rollup-typescript/polymer-library-agnostic-rollup-typescript';

PolymerTypescript;
LitComponent;
PolymerDefault;

// Just an example to show you could register customelements after importing
// The others are immediatly registered
customElements.define('polymer-default', PolymerDefault);

export * from './polymer-default/polymer-default';
export * from './polymer-typescript/polymer-typescript';
export * from './lit-component/lit-component';
