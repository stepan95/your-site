/*


*/
class ImageEditor extends  ElementEditor {
	constructor (classElement, buttons, buttonsEditEl) {
		super(classElement, buttons, buttonsEditEl);
		
	}
	click(el, edit) {
		if (el.parentElement.classList[0] == edit.classElement) {
    		edit.elementsPanel(el.parentElement);
    		edit.selectEl = el.parentElement;
    		document.getElementById('ys-padding').value = el.parentElement.style.padding;
    		document.getElementById('ys-max-width').value = el.parentElement.style.maxWidth;
    		document.getElementById('ys-max-height').value = el.parentElement.style.maxHeight;
    		document.getElementById('ys-border-radius').value = el.style.borderRadius;
    	}
    	
    	addImage.start(el);
    	
    	
    	if (document.getElementById('ys-background') != null) {
			document.getElementById('ys-background').oninput = function() {
			    edit.selectEl.style.background = document.getElementById('ys-background').value;
			}
			document.getElementById('ys-padding').oninput = function() {
			    edit.selectEl.style.padding = document.getElementById('ys-padding').value;
			}
			document.getElementById('ys-max-width').oninput = function() {
			    edit.selectEl.style.maxWidth = document.getElementById('ys-max-width').value;
			}
			document.getElementById('ys-max-height').oninput = function() {
			    edit.selectEl.style.maxHeight = document.getElementById('ys-max-height').value;
			}
			document.getElementById('ys-border-radius').oninput = function() {
			    edit.selectEl.children[0].style.borderRadius = document.getElementById('ys-border-radius').value;
			}
		}
	}
}