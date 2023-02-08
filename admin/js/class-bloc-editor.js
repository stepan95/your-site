/*


*/
class BlocEditor extends  ElementEditor {
	constructor (classElement, buttonsEditEl, buttons = {}) {
		super(classElement, buttons, buttonsEditEl);
		this.panelName = 'Редагування блоку';
	}
	click(el, edit) {
		if (el.classList[0] == edit.classElement) {
    		edit.elementsPanel(el);
    		edit.selectEl = el.nextElementSibling;
    		document.getElementById('ys-padding').value = el.style.padding;
    		document.getElementById('ys-border-radius').value = el.style.borderRadius;
    	}
    	
    	
    	if (document.getElementById('ys-background') != null) {
			document.getElementById('ys-background').oninput = function() {
			    edit.selectEl.style.background = document.getElementById('ys-background').value;
			}
			document.getElementById('ys-color').oninput = function() {
			    edit.selectEl.style.color = document.getElementById('ys-color').value;
			}
			document.getElementById('ys-padding').oninput = function() {
			    edit.selectEl.style.padding = document.getElementById('ys-padding').value;
			}
			document.getElementById('ys-border-radius').oninput = function() {
			    edit.selectEl.style.borderRadius = document.getElementById('ys-border-radius').value;
			}
		}
	}
}