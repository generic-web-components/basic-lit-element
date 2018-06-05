// import { LitElement, html } from '@polymer/lit-element';

// export class BasicLitElement extends LitElement {
// 	constructor() {
// 		super();
// 		this.title = "testing..."
// 	}

// 	static get properties() {
// 		return { 
// 			title: {
// 				type: String,
// 				value: "testing"
// 			},
// 			test: {
// 				type: String,
// 				value: "testing123"
// 			} 
// 		}
// 	}

// 	_render({title,test}) {
// 		return html`<h2>Title = ${title} Value=${test}</h2>`;
// 	}

// }

// window.customElements.define('basic-lit-element', BasicLitElement);


import {LitElement, html} from '@polymer/lit-element';

class BasicLitElement extends LitElement {
	constructor() {
		super();
	}

	static get properties() { 
		return { 
			mood: {
				type: String,
				value: 'test'
			},
			test2: {
				type: String,
				value: 'testing123'
			}
		}
	}

	_render({mood, test2}) {
	return html`Web Components are <span>${mood}</span>!`;
	}

}

 window.customElements.define('basic-lit-element', BasicLitElement);

