(function() {
	let template = document.createElement("template");
	template.innerHTML = `
        <form id="form">
            <fieldset>
                <legend>Custom Widget Text</legend>
                <table>
                    <tr>
                        <td>Text</td>
                        <td><input id="aps_text" type="string"></td>
                    </tr>
                </table>
            </fieldset>
        </form>
	`;

	class HelloWorldAps extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(template.content.cloneNode(true));
            this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
        }
        
        _submit(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							widgetText: this.widgetText
						}
					}
			}));
        }
        
        set widgetText(newText) {
			this._shadowRoot.getElementById("aps_text").value = newText;
		}

		get widgetText() {
			return this._shadowRoot.getElementById("aps_text").value;
		}

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this.redraw();
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {

        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        
        }

        redraw(

        );

	}

customElements.define("com-sap-sample-sh-helloworld1-aps", HelloWorldAps);
})();