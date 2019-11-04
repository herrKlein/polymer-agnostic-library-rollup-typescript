import {PolymerDefault} from './polymer-default/polymer-default'
import {LazyElement} from './lazy-element/lazy-element'
import {SimpleGreeting} from './simple-greeting/simple-greeting'

LazyElement;
SimpleGreeting;

PolymerDefault;
customElements.define('polymer-default', PolymerDefault);

export * from './polymer-default/polymer-default';
export * from './lazy-element/lazy-element';
export * from './simple-greeting/simple-greeting';
